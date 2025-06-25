// components/VideoCard.jsx
import React from 'react';

function VideoCard({ video, likes, setLikes, watchLater, setWatchLater }) {
  const isLiked = likes.includes(video.id);
  const isInWatchLater = watchLater.includes(video.id);

  const toggleLike = () => {
    setLikes(isLiked ? likes.filter(id => id !== video.id) : [...likes, video.id]);
  };

  const toggleWatchLater = () => {
    setWatchLater(isInWatchLater ? watchLater.filter(id => id !== video.id) : [...watchLater, video.id]);
  };

  return (
    <div className="border p-2 rounded shadow w-full md:w-1/3 lg:w-1/4" style={{ marginBottom: "30px" }}>
      <img src={video.thumbnail} alt="thumbnail" style={{ width: "300px", height: "auto" }} className="w-full" />
      <h3 className="font-bold mt-2">{video.title}</h3>
      <p className="text-sm text-gray-600">{video.channel}</p>
      <p className="text-xs text-gray-500">{video.views} • {video.date}</p>
      <div className="flex gap-4 mt-2">
        <button onClick={toggleLike}>{isLiked ? '💔 Unlike' : '❤️ Like'}</button>
        <button onClick={toggleWatchLater}>{isInWatchLater ? '➖ Remove' : '➕ Watch Later'}</button>
      </div>
    </div>
  );
}

export default VideoCard;
