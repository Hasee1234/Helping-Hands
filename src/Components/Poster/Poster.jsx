import React from 'react';

const Poster = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        src="src/assets/lv_0_20241222212455.mp4"
        className="absolute top-0 left-0 w-full object-cover h-[calc(100vh-60px)]" // Adjust height to fit the navbar
        autoPlay
        loop
        muted
      ></video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-[calc(100vh-60px)] bg-black bg-opacity-50"></div> {/* Black overlay to darken the video */}

      {/* Quote Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg px-4">
        Giving is not about making a donation, <br /> it's about making a difference        </h1>
      </div>
    </div>
  );
};

export default Poster;
