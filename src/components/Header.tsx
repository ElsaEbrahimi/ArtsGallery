import React, { useState } from "react";
import { searchArtwork } from "../api/searchApi";
import { type Artwork } from "../api/getApi";

import ResultsSearch from "./ResultsSearch";

const Header = () => {
  // ---------------------------
  // State declarations
  // ---------------------------

  // Store the user's search input
  const [query, setQuery] = useState<string>("");

  // Store the search results returned from the API
  const [results, setResults] = useState<Artwork[]>([]);

  // Control whether the search dialog box is visible
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // ---------------------------
  // Handlers
  // ---------------------------

  // Update query state whenever the input value changes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Execute search when user clicks the Search button
  const handleSearch = async () => {
    try {
      // Call the API and get artwork results
      const data = await searchArtwork(query);
      setResults(data); // Save results to state
      setIsDialogOpen(true); // Open the dialog box
    } catch (err) {
      console.error(err);
      alert("Search failed"); // Show error message if API fails
    }
  };

  // Close the dialog box
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
      <div className="navbar inset-x-0 top-0 z-50 bg-base-100 shadow-sm fixed">
        {/* Left side: Navigation links */}
        <div className="flex-1">
          <span className="btn btn-ghost text-xl">Home</span>
          <span className="btn btn-ghost text-xl">My Fav</span>
        </div>

        {/* Right side: Search input and button */}
        <div className="flex gap-2">
          <input
            type="text"
            value={query} // bind input to state
            onChange={handleChange} // update state on input change
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <button onClick={handleSearch} className="btn btn-ghost">
            Search
          </button>
        </div>

        {/* ---------------------------
          Dialog box for search results
          Only rendered when isDialogOpen is true
      --------------------------- */}
        {isDialogOpen && (
          <div className="fixed inset-0 bg-gray/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-2xl h-screen overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Search Results</h2>

              {/* Show a message if no results */}
              {results.length === 0 && <p>No artworks found.</p>}
              <ul className="list bg-base-100 rounded-box shadow-md">
                <div className="justify-end card-actions">
                  <button onClick={closeDialog} className="btn btn-ghost w-xs">
                    {" "}
                    Close
                  </button>
                </div>

                {/* Map through results and display them */}
                {results.map((artwork) => (
                  <ResultsSearch artwork={artwork} key={artwork.id} />
                ))}
              </ul>

              {/* Close button */}
              <button
                onClick={closeDialog}
                className="btn btn-primary mt-4 w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
