// import React from 'react';
// import { connect } from 'react-redux';
// import { setSelectedNote } from '../../../actions/note';
// import styles from './styles.module.css';
// import NoteItem from './NoteItem';

// const TrashedNoteList = ({ notes, selectedNote }) => {
//   return (
//     <>
//       <span className={styles.trashedTitle}>{notes.length} trashed note</span>
//       <ul className={styles.trashedList}>
//         {notes.map((note) => (
//           <NoteItem
//             key={note.id}
//             note={note}
//             selected={selectedNote && note.id === selectedNote.id}
//           />
//         ))}
//       </ul>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   notes: state.note.trashedNotes,
//   selectedNote: state.note.selectedNote,
// });

// export default connect(mapStateToProps, { setSelectedNote })(TrashedNoteList);
