import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import vBanner from '../Banner/asset/banner.mp4';

const Banner = () => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative h-[600px] overflow-hidden max-sm:h[600px] ">
            <video 
                ref={videoRef}
                className="absolute top-0 left-0 md:w-full md:h-[600px] w-full h-[600px] object-cover"
                autoPlay 
                loop 
                muted
            >
                <source src={vBanner} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 md:h-[600px] w-full h-[600px] z-10"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center mt-14 z-20 top-[200px]  md:top-[250px] ">
                <h1 className="md:text-6xl text-4xl font-bold text-white">Welcome to MediNest</h1>
                <p className="mt-4 md:text-2xl text-xl text-white mb-5">The Nest for All Your Medical Needs</p>
                <Link to="/" className='mt-2 text-white hover:scale-105 duration-[0.3s] md:text-4xl text-3xl border-2 p-3 rounded-2xl'>Our Services</Link>
            </div>
            <button 
                onClick={togglePlayPause} 
                className="absolute top-10 right-4  text-white p-2 rounded-full z-20"
            >
                {isPlaying ? (
                    <CiPause1 className="h-9 w-9" />  // Pause icon when video is playing
                ) : (
                    <CiPlay1 className="h-9 w-9" />  // Play icon when video is paused
                )}
            </button>
        </div>
    );
};

export default Banner;