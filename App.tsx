
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNavBar from './components/BottomNavBar';
import VideoCard from './components/VideoCard';
import VideoView from './components/VideoView';
import { VIDEOS, CHANNELS } from './constants';
import type { Video, Channel } from './types';

const App: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when a video is selected or deselected
    window.scrollTo(0, 0);
  }, [selectedVideoId]);

  const handleSelectVideo = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  const handleCloseVideo = () => {
    setSelectedVideoId(null);
  };

  const selectedVideo = VIDEOS.find(v => v.id === selectedVideoId);

  return (
    <div className="max-w-md mx-auto bg-zinc-900 min-h-screen font-sans">
      {selectedVideo ? (
        <VideoView video={selectedVideo} onClose={handleCloseVideo} onSelectVideo={handleSelectVideo} />
      ) : (
        <>
          <Header />
          <main className="pb-16">
            {VIDEOS.map((video) => {
              const channel = CHANNELS.find(c => c.id === video.channelId) as Channel;
              return (
                <VideoCard 
                  key={video.id} 
                  video={video} 
                  channel={channel}
                  onSelectVideo={() => handleSelectVideo(video.id)} 
                />
              );
            })}
          </main>
          <BottomNavBar />
        </>
      )}
    </div>
  );
};

export default App;
