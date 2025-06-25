// pages/Home.jsx
import React from 'react';
import VideoCard from '../components/VideoCard';
import { videos } from '../data/dummyVideos';

function Home({ likes, setLikes, watchLater, setWatchLater }) {
  return (
    <div className="p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videos.map(video => (
        <VideoCard
          key={video.id}
          video={video}
          likes={likes}
          setLikes={setLikes}
          watchLater={watchLater}
          setWatchLater={setWatchLater}
        />
      ))}
    </div>
  );
}

export default Home;
