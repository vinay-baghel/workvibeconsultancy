import React from 'react';
import Typewriter from '../components/Typewriter';

const Home = () => {
  return (
    <>
      <div className="relative bg-home h-[80vh] w-full flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/homee.mp4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Heading */}
        <h1 className="z-10 text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-head bg-gloww px-4">
          Welcome To WorkVibe Consultancy
        </h1>

        {/* Typewriter Effect */}
        <div className="z-10 mt-4 px-4">
          <Typewriter />
        </div>
      </div>
    </>
  );
};

export default Home;
