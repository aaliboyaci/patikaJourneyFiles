export const addNote = (note, color) => ({
  type: "ADD_NOTE",
  payload: { note, color },
});

export const filterNotes = (filterText) => ({
  type: "FILTER_NOTES",
  payload: filterText,
});

export const deleteNote = (index) => {
  return {
    type: "DELETE_NOTE",
    payload: index,
  };
};
