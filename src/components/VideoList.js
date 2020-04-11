/* eslint-disable react/jsx-no-undef */
import React from "react";
import VideoListItem from "./VideoItem";
import { VideoListsWrapper, VideoItemWrapper } from "./VideoStyle";

export default class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { allVideos } = this.props;
    const videoItems = allVideos.map((video) => {
      return (
        <VideoListItem
          // onVideoSelect={props.onVideoSelect}
          key={video.etag}
          video={video}
        />
      );
    });

    return (
      <VideoListsWrapper>
        <VideoItemWrapper className='col-md-4 list-group'>
          {" "}
          {videoItems}{" "}
        </VideoItemWrapper>
      </VideoListsWrapper>
    );
  }
}
