import { useState } from "react";
import { useNote } from "../context/useNote";

type Props = {
  artworkId: number;
  onClose: () => void;
};

const NoteInput = ({ artworkId, onClose }: Props) => {
  const { addOrUpdateNote, removeNote, getNoteByArtworkId } = useNote();

  const [text, setText] = useState(getNoteByArtworkId(artworkId) ?? "");

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Your Note</h3>

        {/* Textarea */}
        <textarea
          className="textarea textarea-bordered w-full mt-4"
          placeholder="Write your note here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Actions */}
        <div className="modal-action">
          <button
            className="btn btn-primary"
            onClick={() => {
              addOrUpdateNote(artworkId, text);
              onClose();
            }}
          >
            Save
          </button>

          <button
            className="btn btn-error"
            onClick={() => {
              removeNote(artworkId);
              onClose();
            }}
          >
            Delete
          </button>

          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteInput;
