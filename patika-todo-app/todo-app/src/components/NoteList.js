import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../redux/actions"; // Eylemleri içeren dosyanızı içe aktarın
import "./styles.css";

const NoteList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const filterText = useSelector((state) => state.filterText);

  const filteredNotes = notes.filter((note) =>
    note.note.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleDeleteNote = (index) => {
    dispatch(deleteNote(index)); // deleteNote eylemini çağırarak notu silin
  };

  return (
    <div className="noteList">
      {filteredNotes.map((note, index) => (
        <div key={index} className="noteItem">
          <input type="checkbox" style={{ marginRight: "10px" }} />
          <div style={{ color: note.color }}>{note.note}</div>
          <button onClick={() => handleDeleteNote(index)}>Sil</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
