import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ videos }) => {
  return (
    <section className={styles.videoDetail}>
      <iframe
        // title={video.snippet.title}
        // id={video.snippet.channelId}
        type='text/html'
        width='720'
        height='405'
        src={`https://www.youtube.com/embed/`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default VideoDetail;
