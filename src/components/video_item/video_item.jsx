import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video, video: { snippet } }) => {
  const { url } = snippet.thumbnails.medium;
  const { title } = snippet;
  const { channelTitle } = snippet;
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img className={styles.thumbnail} src={url} alt='video thumbnail' />
        <div className={styles.metaData}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channel}>{channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
