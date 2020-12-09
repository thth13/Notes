import React from 'react';
import c from 'classnames';
import { connect } from 'react-redux';
import { setSelectedNote, deleteNote } from '../../../actions/note';
import styles from './styles.module.css';
import trashIcon from './trash.svg';

const NoteItem = ({ note, setSelectedNote, selected, deleteNote }) => {
  return (
    <li
      className={c(styles.noteItem, selected && styles.selected)}
      onClick={() => setSelectedNote(note)}
    >
      {note && note.title ? note.title : 'New note...'}
      {selected && (
        <img
          onClick={() => deleteNote(note)}
          className={styles.trashIcon}
          src={trashIcon}
          alt="delete-icon"
        />
      )}
    </li>
  );
};

export default connect(null, { setSelectedNote, deleteNote })(NoteItem);
