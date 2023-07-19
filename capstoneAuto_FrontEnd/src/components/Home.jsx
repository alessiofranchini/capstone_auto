import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="video-container video-container-500">
        <video className="img-responsive" src="/assets/img/ferrari.mp4" autoPlay loop muted></video>
      </div>
      <div className="video-container video-container-500">
        <video className="img-responsive" src="/assets/img/audi.mp4" autoPlay loop muted></video>
        <div className="video-overlay">
          <Link to="/collezioni" className="custom-link-video">
            Scopri la nostra collezione
            <span className="arrow">&#9654;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
