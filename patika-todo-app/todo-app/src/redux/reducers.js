const initialState = {
  notes: [],
  filterText: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          { note: action.payload.note, color: action.payload.color },
        ],
      };
    case "FILTER_NOTES":
      return {
        ...state,
        filterText: action.payload,
      };
    case "DELETE_NOTE":
      const newNotes = state.notes.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        notes: newNotes,
      };
    default:
      return state;
  }
};

export default rootReducer;
