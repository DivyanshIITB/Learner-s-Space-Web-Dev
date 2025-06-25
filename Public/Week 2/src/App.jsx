// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WatchLater from './pages/WatchLater';
import './App.css';

function App() {
  const [watchLater, setWatchLater] = useState(
    JSON.parse(sessionStorage.getItem('watchLater')) || []
  );
  const [likes, setLikes] = useState(
    JSON.parse(sessionStorage.getItem('likes')) || []
  );
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    sessionStorage.setItem('watchLater', JSON.stringify(watchLater));
  }, [watchLater]);

  useEffect(() => {
    sessionStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    const interval = setInterval(() => setTimeSpent((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Navbar watchLaterCount={watchLater.length} timeSpent={timeSpent} />
      <Routes>
        <Route path="/" element={<Home likes={likes} setLikes={setLikes} watchLater={watchLater} setWatchLater={setWatchLater} />} />
        <Route path="/watchlater" element={<WatchLater watchLater={watchLater} setWatchLater={setWatchLater} />} />
      </Routes>
    </Router>
  );
}

export default App;

