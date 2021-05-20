import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <i className={`${styles.logo} fab fa-youtube`}></i>
      <span className={styles.title}>Youtube</span>
      <input
        ref={inputRef}
        className={styles.searchInput}
        type='search'
        placeholder='Search..'
        onKeyPress={onKeyPress}
      />
      <button className={styles.searchBtn} onClick={onClick}>
        <i className='fas fa-search'></i>
      </button>
    </header>
  );
};

export default SearchHeader;
