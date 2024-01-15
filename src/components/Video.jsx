"use client";

import React, { useState } from "react";
import PlayVideoIcon from "./icons/PlayVideoIcon";

const Video = () => {
  const [isPlayVideo, setIsPlayVideo] = useState(false);

  return (
    <div className="w-full mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
      <div
        onClick={() => setIsPlayVideo(!isPlayVideo)}
        className="relative h-[612px] cursor-pointer aspect-h-9 bg-black"
      >
        {!isPlayVideo && (
          <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
            <PlayVideoIcon/>
            <span className="sr-only">Play Video</span>
          </button>
        )}
        {isPlayVideo && (
          <iframe
            src="https://www.youtube.com/embed/pFwGC5VKh0c"
            title="YouTube video player"
            width={"100%"}
            height={"100%"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Video;
