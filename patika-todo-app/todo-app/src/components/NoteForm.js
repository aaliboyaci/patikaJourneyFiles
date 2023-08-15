import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/actions";
import "./styles.css";

const NoteForm = () => {
  const [note, setNote] = useState("");
  const [color, setColor] = useState("black");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(note, color));
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter your note..."
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
