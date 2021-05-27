import React, { useCallback, useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const search = useCallback(
    query => {
      setSelectedVideo(null);
      setLoading(true);
      youtube
        .search(query) //
        .then(videos => {
          setVideos(videos);
          setLoading(false);
        });
    },
    [youtube]
  );

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      {loading && (
        <section className={styles.loading}>
          <div className={styles.spinner}></div>
        </section>
      )}
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
