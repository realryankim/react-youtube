import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const { url } = snippet.thumbnails.medium;
    const { title } = snippet;
    const { channelTitle } = snippet;

    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
        <div className={styles.video}>
          <img className={styles.thumbnail} src={url} alt='video thumbnail' />
          <div className={styles.metaData}>
            <p className={styles.title}>{title}</p>
            <p className={styles.channel}>{channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
