import React from 'react';
import './App.css';

const App = () => {
  return (
    <>
    <div className="background">
      <iframe
        className="video-background"
        src="https://www.youtube.com/embed/DHUnz4dyb54?autoplay=1&mute=1&loop=1&playlist=DHUnz4dyb54&controls=0&modestbranding=1&rel=0&showinfo=0"
        title="Tropical Reef Camera powered by EXPLORE.org"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className='button-pos'>
        <button className='button'>
          BUTTON
        </button>
      </div>
    </div>
    </>
  );
};

export default App;
