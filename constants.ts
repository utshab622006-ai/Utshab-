
import type { Video, Channel, Comment } from './types';

export const CHANNELS: Channel[] = [
  { id: 'ch1', name: 'CodeStream', avatarUrl: 'https://picsum.photos/seed/ch1/48/48', subscriberCount: 1230000 },
  { id: 'ch2', name: 'NatureWonders', avatarUrl: 'https://picsum.photos/seed/ch2/48/48', subscriberCount: 4500000 },
  { id: 'ch3', name: 'GamerX', avatarUrl: 'https://picsum.photos/seed/ch3/48/48', subscriberCount: 875000 },
  { id: 'ch4', name: 'KitchenAdventures', avatarUrl: 'https://picsum.photos/seed/ch4/48/48', subscriberCount: 210000 },
  { id: 'ch5', name: 'TechExplained', avatarUrl: 'https://picsum.photos/seed/ch5/48/48', subscriberCount: 3400000 },
];

export const VIDEOS: Video[] = [
  { id: 'v1', title: 'Building a React App in 10 Minutes', thumbnailUrl: 'https://picsum.photos/seed/v1/400/225', channelId: 'ch1', views: 1500000, uploadedAt: '2 weeks ago', duration: '12:35', likes: 89000 },
  { id: 'v2', title: 'The Most Beautiful Places on Earth', thumbnailUrl: 'https://picsum.photos/seed/v2/400/225', channelId: 'ch2', views: 12345678, uploadedAt: '1 month ago', duration: '25:10', likes: 1200000 },
  { id: 'v3', title: 'Speedrunning the Latest RPG | World Record', thumbnailUrl: 'https://picsum.photos/seed/v3/400/225', channelId: 'ch3', views: 890000, uploadedAt: '3 days ago', duration: '1:15:45', likes: 45000 },
  { id: 'v4', title: '5 Easy Pasta Recipes for Beginners', thumbnailUrl: 'https://picsum.photos/seed/v4/400/225', channelId: 'ch4', views: 450000, uploadedAt: '5 months ago', duration: '8:20', likes: 15000 },
  { id: 'v5', title: 'Unboxing the New Gemini Phone', thumbnailUrl: 'https://picsum.photos/seed/v5/400/225', channelId: 'ch5', views: 5600000, uploadedAt: '2 days ago', duration: '18:55', likes: 250000 },
  { id: 'v6', title: 'A Deep Dive into Advanced CSS', thumbnailUrl: 'https://picsum.photos/seed/v6/400/225', channelId: 'ch1', views: 780000, uploadedAt: '1 year ago', duration: '45:30', likes: 62000 },
  { id: 'v7', title: 'Hiking Through the Andes Mountains', thumbnailUrl: 'https://picsum.photos/seed/v7/400/225', channelId: 'ch2', views: 3200000, uploadedAt: '6 months ago', duration: '32:18', likes: 98000 },
];

export const COMMENTS: Comment[] = [
    { id: 'c1', videoId: 'v1', channel: CHANNELS[1], text: 'This was so helpful! Finally understand hooks.', likes: 1200, timestamp: '1 week ago' },
    { id: 'c2', videoId: 'v1', channel: CHANNELS[2], text: 'Great tutorial, easy to follow.', likes: 85, timestamp: '2 weeks ago' },
    { id: 'c3', videoId: 'v2', channel: CHANNELS[0], text: 'Wow, I need to visit these places!', likes: 5000, timestamp: '3 days ago' },
    { id: 'c4', videoId: 'v5', channel: CHANNELS[3], text: 'Looks amazing! Is the camera really that good?', likes: 342, timestamp: '1 day ago' },
    { id: 'c5', videoId: 'v1', channel: CHANNELS[4], text: 'Could you do a video on state management next?', likes: 412, timestamp: '4 days ago'},
];
