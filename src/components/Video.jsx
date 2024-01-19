"use client";

import React, { useState } from "react";
import PlayVideoIcon from "./icons/PlayVideoIcon";

const Video = () => {
  const [isPlayVideo, setIsPlayVideo] = useState(false);

  return (
    <div
      data-aos="fade-up"
      className="mx-auto w-full overflow-hidden rounded-2xl lg:mb-20 "
    >
      <div
        onClick={() => setIsPlayVideo(!isPlayVideo)}
        className="aspect-h-9 relative h-[200px] cursor-pointer bg-black md:h-[612px]"
      >
        {!isPlayVideo && (
          <button className="absolute inset-auto  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white md:h-16 md:w-16 md:scale-100 lg:h-28 lg:w-28">
            <PlayVideoIcon />
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
