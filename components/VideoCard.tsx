
import React from 'react';
import type { Video, Channel } from '../types';
import { MoreVertIcon } from './icons/Icons';

interface VideoCardProps {
  video: Video;
  channel: Channel;
  onSelectVideo: (videoId: string) => void;
}

const formatViews = (views: number): string => {
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M views`;
  if (views >= 1000) return `${(views / 1000).toFixed(0)}K views`;
  return `${views} views`;
};

const VideoCard: React.FC<VideoCardProps> = ({ video, channel, onSelectVideo }) => {
  return (
    <div className="mb-4 cursor-pointer" onClick={() => onSelectVideo(video.id)}>
      <div className="relative">
        <img src={video.thumbnailUrl} alt={video.title} className="w-full object-cover" />
        <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
      </div>
      <div className="flex items-start p-3">
        <img src={channel.avatarUrl} alt={channel.name} className="h-9 w-9 rounded-full mr-3 mt-1" />
        <div className="flex-grow">
          <h3 className="text-white text-base font-medium leading-snug line-clamp-2">
            {video.title}
          </h3>
          <p className="text-zinc-400 text-sm mt-1">
            {channel.name} · {formatViews(video.views)} · {video.uploadedAt}
          </p>
        </div>
        <button className="text-white ml-2" aria-label="More options">
          <MoreVertIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
