import React from 'react';
import styles from './styles.module.css';

const SearchField = () => {
  return (
    <div className={styles.searchBlock}>
      <input className={styles.searchField} placeholder="Search everywhere" />
    </div>
  );
};

export default SearchField;
