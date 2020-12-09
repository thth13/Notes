import {
  SET_SELECTED_NOTE,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from '../actions/types';

const initialState = {
  selectedNote: null,
  notes: [],
};

export default function note(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SELECTED_NOTE:
      return {
        ...state,
        selectedNote: payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, payload],
      };
    case UPDATE_NOTE:
      return {
        ...state,
        selectedNote: payload,
        notes: state.notes.map((note) =>
          note.id === payload.id
            ? {
                ...note,
                title: payload.title,
                content: payload.content,
              }
            : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        selectedNote: null,
        notes: state.notes.filter((note) => note.id !== payload.id),
      };
    default:
      return state;
  }
}
