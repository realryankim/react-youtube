import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
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

  const handleLogoClick = () => {
    window.location = '/react-youtube';
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={handleLogoClick}>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + '/images/logo.png'}
          alt='logo'
        />
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='Search...'
        onKeyPress={onKeyPress}
      />
      <button type='submit' className={styles.button} onClick={onClick}>
        <img
          className={styles.buttonImg}
          src={process.env.PUBLIC_URL + '/images/search.png'}
          alt='search'
        />
      </button>
    </header>
  );
});

export default SearchHeader;
