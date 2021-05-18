import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = () => {
  return (
    <header className={styles.header}>
      <i className={`${styles.logo} fab fa-youtube`}></i>
      <span className={styles.title}>Youtube</span>
      <input
        className={styles.searchInput}
        type='text'
        placeholder='Search..'
      />
      <button className={styles.searchBtn}>
        <i className='fas fa-search'></i>
      </button>
    </header>
  );
};

export default SearchHeader;
