import React from 'react';

interface IconProps {
  className?: string;
}

export const YouTubeLogoIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 28 20" fill="currentColor" className={className}><path d="M27.5 5.2s-.3-2.1-1.2-3C25.2 1.1 24 1 24 1h-3.5s-1 .1-3.5 1.2c-.9 1-1.2 3-1.2 3s-.3 2.5-.3 5v.6c0 2.5.3 5 .3 5s.3 2.1 1.2 3c.9 1.1 2.3 1.2 3.8 1.2 2.7 0 7-1 7-1s2.2-.1 3.2-1.2c.9-.9 1.2-3 1.2-3s.3-2.5.3-5v-.6c0-2.5-.3-5-.3-5zM11 15V5l10 5-10 5z"></path></svg>
);

export const CastIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"></path></svg>
);

export const BellIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.21 1.79-4 4-4s4 1.79 4 4v6z"></path></svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
);

export const ShortsIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.77,10.32l-1.1-.5L18,8.27l-1.34-.44-1,1.1L14.44,8,12,10.63,9.56,8l-1.22.93,1-1.1L7.9,8.27,9.25,8.71l-1.1.5,1.83,1.35L12,15.27l2.08-3.6Z M12,2.05L12.01,2,12,2.05,10.66,4.4,12,6.05l1.34-1.65L12,2.05 M14.66,4.4,16,2.75,14.66,4.4,16,2.75,14.25,2,12,4.3,9.75,2,8,2.75,9.34,4.4,8,6.05,9.75,5.2,12,7.5,14.25,5.2,16,6.05,14.66,4.4 M19.95,12l-1.65,1.34L19.95,12l1.34-1.65L19.95,12 M19.2,9.75,22,12,19.2,14.25,18.45,16,21.2,14.25,22,12,19.2,9.75,18.45,8,21.2,9.75,22,12 M4.05,12,2.7,13.34,4.05,12,2.7,10.35,4.05,12 M4.8,14.25,2,12,4.8,9.75,5.55,8,2.8,9.75,2,12,4.8,14.25,5.55,16,2.8,14.25,2,12 M9.34,19.6,8,21.25,9.75,22,12,19.7,14.25,22,16,21.25,14.66,19.6,16,17.95,14.25,18.8,12,16.5,9.75,18.8,8,17.95,9.34,19.6Z"></path></svg>
);

export const SubscriptionsIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"></path></svg>
);

export const YouIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"></path></svg>
);

export const PlusCircleIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
);

export const MoreVertIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
);

export const PlayIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M8 5v14l11-7z"></path></svg>
);

export const LikeIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} stroke="currentColor" strokeWidth="1"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"></path></svg>
);

export const DislikeIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} stroke="currentColor" strokeWidth="1"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79-.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></svg>
);

export const ShareIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"></path></svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
);

export const SpinnerIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export const CopyIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
);