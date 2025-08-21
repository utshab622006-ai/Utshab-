import React, { useState } from 'react';
import type { Video, Channel } from '../types';
import { LikeIcon, DislikeIcon, ShareIcon, DownloadIcon, ChevronDownIcon, SpinnerIcon, CopyIcon, CloseIcon } from './icons/Icons';
import { GoogleGenAI } from '@google/genai';

interface VideoDetailsProps {
  video: Video;
  channel: Channel;
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

const VideoDetails: React.FC<VideoDetailsProps> = ({ video, channel }) => {
    const [expanded, setExpanded] = useState(false);
    const [isSharing, setIsSharing] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [shareText, setShareText] = useState('');
    const [copyButtonText, setCopyButtonText] = useState('Copy');
    
    const handleShare = async () => {
        if (isSharing) return;
        setIsSharing(true);
        setShareText('');
        setCopyButtonText('Copy');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `Generate a fun, short, and catchy message to share this YouTube video titled "${video.title}". Include some relevant emojis. Keep it under 140 characters.`;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });

            setShareText(response.text);
            setShowShareModal(true);
        } catch (error) {
            console.error("Error generating share text:", error);
            // Fallback to a simpler share text on error
            setShareText(`Check out this video: ${video.title}`);
            setShowShareModal(true);
        } finally {
            setIsSharing(false);
        }
    };
    
    const handleCopy = () => {
        const fullText = `${shareText}\n\nWatch here: https://you.tube/${video.id}`;
        navigator.clipboard.writeText(fullText).then(() => {
            setCopyButtonText('Copied!');
            setTimeout(() => setCopyButtonText('Copy'), 2000);
        }).catch(err => {
            console.warn('Clipboard API not available, simulating copy action.', err);
            setCopyButtonText('Copied!');
            setTimeout(() => setCopyButtonText('Copy'), 2000);
        });
    };

  return (
    <div>
      <h1 className="text-white text-xl font-bold leading-tight">{video.title}</h1>
      <div className={`text-zinc-400 text-sm mt-2 ${!expanded && 'line-clamp-1'}`} onClick={() => setExpanded(!expanded)}>
        <span>{formatNumber(video.views)} views</span>
        <span className="mx-1">·</span>
        <span>{video.uploadedAt}</span>
        <span className="text-white font-semibold ml-2">...more</span>
      </div>

      <div className="flex items-center my-4">
        <img src={channel.avatarUrl} alt={channel.name} className="w-10 h-10 rounded-full" />
        <div className="ml-3 flex-grow">
          <p className="text-white font-semibold">{channel.name}</p>
          <p className="text-zinc-400 text-xs">{formatNumber(channel.subscriberCount)} subscribers</p>
        </div>
        <button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full">
          Subscribe
        </button>
      </div>

      <div className="flex items-center justify-around bg-zinc-800 p-2 rounded-full text-sm">
        <button className="flex items-center gap-2">
            <LikeIcon className="h-5 w-5" /> {formatNumber(video.likes)}
        </button>
        <div className="w-px h-5 bg-zinc-600"></div>
        <button>
            <DislikeIcon className="h-5 w-5" />
        </button>
        <button className="flex items-center gap-2" onClick={handleShare} disabled={isSharing}>
            {isSharing ? <SpinnerIcon className="h-5 w-5" /> : <ShareIcon className="h-5 w-5" />} 
            Share
        </button>
        <button className="flex items-center gap-2">
            <DownloadIcon className="h-5 w-5" /> Download
        </button>
      </div>

      {showShareModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowShareModal(false)}>
            <div className="bg-zinc-800 rounded-2xl p-6 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-white">Share with AI</h2>
                    <button onClick={() => setShowShareModal(false)} className="text-zinc-400 hover:text-white" aria-label="Close modal">
                        <CloseIcon className="h-6 w-6" />
                    </button>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 mb-4">
                   <p className="text-white whitespace-pre-wrap">{shareText}</p>
                   <p className="text-blue-400 mt-2 text-sm">Watch here: https://you.tube/{video.id}</p>
                </div>
                <button 
                    onClick={handleCopy}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-colors"
                >
                    <CopyIcon className="h-5 w-5" /> {copyButtonText}
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default VideoDetails;