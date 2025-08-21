
import React from 'react';
import { HomeIcon, ShortsIcon, SubscriptionsIcon, YouIcon, PlusCircleIcon } from './icons/Icons';

const BottomNavBar: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-zinc-900 border-t border-zinc-700/50 flex justify-around items-center py-1">
      <NavItem icon={<HomeIcon className="h-6 w-6" />} label="Home" active />
      <NavItem icon={<ShortsIcon className="h-6 w-6" />} label="Shorts" />
      <button aria-label="Create new content">
        <PlusCircleIcon className="h-9 w-9 text-white" />
      </button>
      <NavItem icon={<SubscriptionsIcon className="h-6 w-6" />} label="Subscriptions" />
      <NavItem icon={<YouIcon className="h-6 w-6" />} label="You" />
    </footer>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => {
  return (
    <button className={`flex flex-col items-center justify-center gap-1 w-16 ${active ? 'text-white' : 'text-zinc-400'}`}>
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
};

export default BottomNavBar;
