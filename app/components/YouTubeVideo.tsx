"use client";

import { T } from "gt-next";

export default function YouTubeVideo() {
  return (
    <T id="components.youtubevideo.0">
      <div className="relative w-full aspect-video">
        <iframe
          src="https://www.youtube.com/embed/w17OE9qXFHc"
          title="capitalX Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </T>
  );
} 