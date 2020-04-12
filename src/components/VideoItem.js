import React from "react";
import { VideoItem } from "./VideoStyle";

export default class VideoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { video } = this.props;
    const imageUrl = video.snippet.thumbnails.medium.url;
    const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
    return (
      <VideoItem className='list-group-item'>
        <a href={videoUrl} target='_blank'>
          <div className='video-list media'>
            <div className='media-left'>
              <img
                src={imageUrl}
                className='media-object'
                alt='youtube video'
              />
            </div>

            <div className='media-body'>
              <div className='media-heading'>{video.snippet.title}</div>
            </div>
          </div>
        </a>
      </VideoItem>
    );
  }
}
