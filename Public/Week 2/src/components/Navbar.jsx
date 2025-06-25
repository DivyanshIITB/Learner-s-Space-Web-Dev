// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ watchLaterCount, timeSpent }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-xl font-bold">MiniYouTube</Link>
      <div className="flex gap-4 items-center">
        <input type="text" placeholder="Search..." className="p-1 px-2 rounded" />
        <Link to="/watchlater">Watch Later ({watchLaterCount})</Link>
        <span>Time Spent: {timeSpent}s</span>
      </div>
    </nav>
  );
}

export default Navbar;
