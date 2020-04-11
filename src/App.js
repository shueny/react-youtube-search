import React from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import "./App.css";

const URL = "https://www.googleapis.com/youtube/v3/search";
const API_TOKEN = "AIzaSyBKYFGvFdL1hn1NHXIbt9apRShM0CTbErk";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maxResults: 10, video: [], allVideos: [], currentPage: 1 };
  }

  componentDidMount() {
    const { maxResults, video, allVideos } = this.state;
    axios
      .get(
        URL +
          "?part=snippet&maxResults=" +
          maxResults +
          "&q=&type=video&key=" +
          API_TOKEN,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({
          video: data,
          allVideos: data.items
        });
      })
      .catch(err => {});
  }

  onKeyUp = e => {
    const { allVideos } = this.state;
    // console.log(e.target.value);
    // console.log(allVideos.items);
    const post = allVideos.filter(
      item => console.log(item)
      // item.title.rendered.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ post });
  };

  render() {
    const { allVideos } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar onChange={this.onKeyUp} />
        <VideoList allVideos={allVideos} />
      </div>
    );
  }
}
