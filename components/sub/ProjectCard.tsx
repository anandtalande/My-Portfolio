'use client'
// Import the necessary modules and styles
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define the Props interface
interface Props {
  title: string;
  description: string;
  images: string[];
}

// ProjectCard component
const ProjectCard = ({ title, description, images }: Props) => {
  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  // useEffect to handle image change at intervals
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 60); // fade out duration
    }, 5000);

    // Cleanup function to clear the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  // Render the component
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border transition-opacity duration-500 ease-in-out transform hover:scale-110 border-dot">
      {/* Image component */}
      <Image
        src={images[currentImage]}
        alt={title}
        width={1000}
        height={1000}
        className={`w-full object-contain transition-opacity duration-400 ${fade ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Project information */}
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
