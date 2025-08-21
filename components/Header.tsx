import React from 'react';
import { YouTubeLogoIcon, CastIcon, BellIcon, SearchIcon, UserIcon } from './icons/Icons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-zinc-900/80 backdrop-blur-md z-10 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <YouTubeLogoIcon className="h-7 w-7 text-red-600" />
        <span className="text-xl font-bold tracking-tighter">utshab x youtube</span>
      </div>
      <div className="flex items-center gap-4">
        <button aria-label="Cast to device">
          <CastIcon className="h-6 w-6 text-white" />
        </button>
        <button aria-label="Notifications">
            <BellIcon className="h-6 w-6 text-white" />
        </button>
        <button aria-label="Search">
            <SearchIcon className="h-6 w-6 text-white" />
        </button>
        <button aria-label="Your account">
            <UserIcon className="h-7 w-7 text-white bg-purple-600 rounded-full p-0.5" />
        </button>
      </div>
    </header>
  );
};

export default Header;