import {
  SET_SELECTED_NOTE,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from '../actions/types';

export const setSelectedNote = (note) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_NOTE,
    payload: note,
  });
};

export const addNote = (note) => (dispatch) => {
  dispatch({
    type: ADD_NOTE,
    payload: note,
  });
};

export const updateNote = (note) => (dispatch) => {
  dispatch({
    type: UPDATE_NOTE,
    payload: note,
  });
};

export const deleteNote = (note) => (dispatch) => {
  dispatch({
    type: DELETE_NOTE,
    payload: note,
  });
};
