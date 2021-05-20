import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import axios from 'axios';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';

function App() {
  const [videos, setVideos] = useState([]);

  const search = query => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCvwachC5WMQsuHzo3W5h5YcgSH9tVWhfw`
      )
      .then(res => {
        const { data } = res;
        const items = data.items.map(item => ({
          ...item,
          id: item.id.videoId,
        }));
        setVideos(items);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    axios
      .get(
        'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCvwachC5WMQsuHzo3W5h5YcgSH9tVWhfw'
      )
      .then(res => {
        const { data } = res;
        setVideos(data.items);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      {/* <VideoDetail videos={videos} /> */}
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
