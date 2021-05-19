import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import axios from 'axios';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCvwachC5WMQsuHzo3W5h5YcgSH9tVWhfw&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCvwachC5WMQsuHzo3W5h5YcgSH9tVWhfw'
      )
      .then(res => {
        const { data } = res;
        setVideos(data.items);
      });
  }, []);

  console.log(videos);

  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
