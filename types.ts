
export interface Channel {
  id: string;
  name: string;
  avatarUrl: string;
  subscriberCount: number;
}

export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelId: string;
  views: number;
  uploadedAt: string;
  duration: string;
  likes: number;
}

export interface Comment {
  id: string;
  videoId: string;
  channel: Channel;
  text: string;
  likes: number;
  timestamp: string;
}
