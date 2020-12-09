import React from 'react';
import { connect } from 'react-redux';
import { addNote, setSelectedNote } from '../../../actions/note';
import styles from './styles.module.css';
import NoteItem from './NoteItem';

const Sidebar = ({ notes, selectedNote, addNote, setSelectedNote }) => {
  const newNote = () => {
    const note = {
      id: Date.now(),
      title: '',
      content: '',
    };

    addNote(note);
    setSelectedNote(note);
  };

  return (
    <ul className={styles.notesList}>
      <button className={styles.addButton} onClick={newNote}>
        + New note
      </button>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          selected={selectedNote && note.id === selectedNote.id}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  notes: state.note.notes,
  selectedNote: state.note.selectedNote,
});

export default connect(mapStateToProps, { addNote, setSelectedNote })(Sidebar);
