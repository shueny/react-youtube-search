/* eslint-disable react/jsx-no-undef */
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

    return (
      <VideoItem
        // onClick={() => props.onVideoSelect(video)}
        className='list-group-item'>
        <div className='video-list media'>
          <div className='media-left'>
            <img src={imageUrl} className='media-object' />
          </div>

          <div className='media-body'>
            <div className='media-heading'>{video.snippet.title}</div>
          </div>
        </div>
      </VideoItem>
    );
  }
}
