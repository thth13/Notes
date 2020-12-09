import React from 'react';
import NoteList from './note-list/NoteList';
import styles from './styles.module.css';
// import TrashedNoteList from './note-list/TrashedNoteList';
// import SearchField from './SearchField';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <NoteList />
      {/* <div> */}
      {/* <TrashedNoteList /> */}
      {/* <SearchField /> */}
      {/* </div> */}
    </aside>
  );
};

export default Sidebar;
