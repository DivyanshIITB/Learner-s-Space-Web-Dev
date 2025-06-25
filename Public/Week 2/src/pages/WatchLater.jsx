// pages/WatchLater.jsx
import React from 'react';
import VideoCard from '../components/VideoCard';
import { videos } from '../data/dummyVideos';

function WatchLater({ watchLater, setWatchLater }) {
  const watchLaterVideos = videos.filter(video => watchLater.includes(video.id));
  return (
    <div className="p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {watchLaterVideos.length === 0 ? (
        <p>No videos in Watch Later.</p>
      ) : (
        watchLaterVideos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            likes={[]} // likes not needed here
            setLikes={() => {}}
            watchLater={watchLater}
            setWatchLater={setWatchLater}
          />
        ))
      )}
    </div>
  );
}

export default WatchLater;
