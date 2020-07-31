import React from 'react';
import { VideoCardContainer } from './styles';
/*import { ContentAreaContainer, WatchButton } from '../../../BannerMain/styles';
import VideoIframeResponsive from '../../../BannerMain/components/VideoIframeResponsive';
import YoutubeIframeResponsive from '../../../BannerMain/components/VideoIframeResponsive/index';
import { VideoContainer, ResponsiveIframe } from '../../../BannerMain/components/VideoIframeResponsive/styles'*/

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  );
}

export default VideoCard;