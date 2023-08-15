import React from "react";
import { useDispatch } from "react-redux";
import { filterNotes } from "../redux/actions";

const NoteFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(filterNotes(e.target.value));
  };

  return (
    <>
      <h3>Filter todos</h3>
      <input
        type="text"
        placeholder="Filter notes..."
        onChange={handleFilterChange}
      />
    </>
  );
};

export default NoteFilter;
