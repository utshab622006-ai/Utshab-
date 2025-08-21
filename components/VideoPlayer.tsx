
import React from 'react';
import { PlayIcon } from './icons/Icons';

interface VideoPlayerProps {
  thumbnailUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ thumbnailUrl }) => {
  return (
    <div className="relative w-full aspect-video bg-black cursor-pointer group">
      <img src={thumbnailUrl} alt="Video thumbnail" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
        <PlayIcon className="h-16 w-16 text-white/80 group-hover:text-white transition-colors" />
      </div>
    </div>
  );
};

export default VideoPlayer;
