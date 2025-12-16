// Custom hook
import { useContext } from "react";
import { NoteContext } from "./NoteContext";

export function useNote() {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNote must be used within NoteContextProvider");
  }
  return context;
}
