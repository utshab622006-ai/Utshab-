
import React from 'react';
import type { Video, Channel } from '../types';
import { CHANNELS, VIDEOS, COMMENTS } from '../constants';
import VideoPlayer from './VideoPlayer';
import VideoDetails from './VideoDetails';
import CommentSection from './CommentSection';
import VideoCard from './VideoCard';
import { ChevronDownIcon } from './icons/Icons';

interface VideoViewProps {
  video: Video;
  onClose: () => void;
  onSelectVideo: (videoId: string) => void;
}

const VideoView: React.FC<VideoViewProps> = ({ video, onClose, onSelectVideo }) => {
  const channel = CHANNELS.find(c => c.id === video.channelId) as Channel;
  const comments = COMMENTS.filter(c => c.videoId === video.id);
  const suggestedVideos = VIDEOS.filter(v => v.id !== video.id);

  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="sticky top-0 z-10">
        <VideoPlayer thumbnailUrl={video.thumbnailUrl} />
        <button onClick={onClose} className="absolute top-2 left-2 bg-black/50 rounded-full p-1" aria-label="Close video">
            <ChevronDownIcon className="h-6 w-6 text-white"/>
        </button>
      </div>
      <main className="p-3">
        <VideoDetails video={video} channel={channel} />
        <CommentSection comments={comments} />
      </main>
      <div className="border-t border-zinc-700/50 pt-2">
        {suggestedVideos.map(suggestedVideo => {
          const suggestedChannel = CHANNELS.find(c => c.id === suggestedVideo.channelId) as Channel;
          return (
            <VideoCard 
              key={suggestedVideo.id} 
              video={suggestedVideo} 
              channel={suggestedChannel} 
              onSelectVideo={() => onSelectVideo(suggestedVideo.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VideoView;
