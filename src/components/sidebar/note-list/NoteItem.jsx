import React from 'react';
import c from 'classnames';
import { connect } from 'react-redux';
import { setSelectedNote, deleteNote } from '../../../actions/note';
import styles from './styles.module.css';
import trashIcon from './trash.svg';

const NoteItem = ({ note, setSelectedNote, selected, deleteNote }) => {
  const setSelected = () => {
    setSelectedNote(note);
  };

  const noteDelete = (e) => {
    e.stopPropagation();
    deleteNote(note);
  };

  return (
    <li
      className={c(styles.noteItem, selected && styles.selected)}
      onClick={setSelected}
    >
      {note && note.title ? note.title : 'New note...'}
      {selected && (
        <img
          onClick={noteDelete}
          className={styles.trashIcon}
          src={trashIcon}
          alt="delete-icon"
        />
      )}
    </li>
  );
};

export default connect(null, { setSelectedNote, deleteNote })(NoteItem);
