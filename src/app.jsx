import React from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';

function App() {
  return (
    <div className={styles.app}>
      <SearchHeader />
    </div>
  );
}

export default App;
