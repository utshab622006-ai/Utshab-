
import React from 'react';
import type { Comment } from '../types';
import { ChevronRightIcon, LikeIcon } from './icons/Icons';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const topComment = comments[0];

  return (
    <div className="my-4 p-3 bg-zinc-800 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white font-semibold">Comments</h2>
        <ChevronRightIcon className="h-5 w-5 text-zinc-400" />
      </div>
      {topComment && (
        <div className="flex items-start">
          <img src={topComment.channel.avatarUrl} alt={topComment.channel.name} className="w-6 h-6 rounded-full mr-2 mt-1" />
          <div className="text-sm">
            <p className="text-zinc-400">@{topComment.channel.name} <span className="ml-1">{topComment.timestamp}</span></p>
            <p className="text-white line-clamp-2">{topComment.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
