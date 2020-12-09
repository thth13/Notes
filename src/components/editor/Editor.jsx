import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../../actions/note';
import styles from './styles.module.css';

const Editor = ({ note, updateNote }) => {
  const update = (e) => {
    if (e.target.name === 'title') {
      updateNote({ ...note, title: e.target.value });
    }
    if (e.target.name === 'content') {
      updateNote({ ...note, content: e.target.value });
    }
  };

  return (
    <>
      {note ? (
        <main className={styles.editor}>
          <input
            onChange={update}
            name="title"
            className={styles.title}
            value={note.title}
          />
          <textarea
            onChange={update}
            value={note.content}
            name="content"
            className={styles.content}
          />
        </main>
      ) : (
        <p className={styles.chooseNote}>Choose note</p>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  note: state.note.selectedNote,
});

export default connect(mapStateToProps, { updateNote })(Editor);
