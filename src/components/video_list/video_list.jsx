import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos, onVideoClick, display }) => {
  return (
    <ul className={styles.videoList}>
      {videos.map(video => {
        return (
          <VideoItem
            key={video.id}
            video={video}
            onVideoClick={onVideoClick}
            display={display}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
