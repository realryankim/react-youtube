import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video, video: { snippet } }) => {
  console.log(snippet);
  const { url } = snippet.thumbnails.medium;
  const { title } = snippet;
  const { channelTitle } = snippet;
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img src={url} alt='' className={styles.videoImg} />
        <div className={styles.metaData}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channelTitle}>{channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
