import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      {/* <VideoDetail videos={videos} /> */}
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
