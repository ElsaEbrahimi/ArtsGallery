import React, { createContext, useEffect, useState } from "react";

type Note = {
  artworkId: number;
  text: string;
};

type NoteContextType = {
  notes: Note[];
  addOrUpdateNote: (artworkId: number, text: string) => void;
  removeNote: (artworkId: number) => void;
  getNoteByArtworkId: (artworkId: number) => string | undefined;
};

export const NoteContext = createContext<NoteContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const NoteContextProvider = ({ children }: Props) => {
  // Load notes from localStorage
  const [notes, setNotes] = useState<Note[]>(() => {
    const stored = localStorage.getItem("notes");
    return stored ? JSON.parse(stored) : [];
  });

  // Persist notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addOrUpdateNote = (artworkId: number, text: string) => {
    setNotes((prev) => {
      const exists = prev.find((n) => n.artworkId === artworkId);
      if (exists) {
        return prev.map((n) =>
          n.artworkId === artworkId ? { ...n, text } : n
        );
      }
      return [...prev, { artworkId, text }];
    });
  };

  const removeNote = (artworkId: number) => {
    setNotes((prev) => prev.filter((n) => n.artworkId !== artworkId));
  };

  const getNoteByArtworkId = (artworkId: number) => {
    return notes.find((n) => n.artworkId === artworkId)?.text;
  };

  return (
    <NoteContext.Provider
      value={{ notes, addOrUpdateNote, removeNote, getNoteByArtworkId }}
    >
      {children}
    </NoteContext.Provider>
  );
};
