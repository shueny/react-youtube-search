import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import YTSearch from "youtube-api-search";
import ReactPaginate from "react-paginate";
import { API_URL, API_KEY } from "./config";
import { PaginationWrapper } from "./components/PaginationStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

export default class App extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    perPage: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      maxResults: 50,
      type: "video",
      video: [],
      allVideos: [],
      searchTerm: "",
      currentPage: 0,
      totalPages: 0,
      todosPerPage: 10,
      upperPageBound: 3,
      lowerPageBound: 0,
      isPrevBtnActive: "disabled",
      isNextBtnActive: "",
      pageBound: 3
    };
  }

  componentDidMount() {
    const { maxResults } = this.state;
    const endpoint = `${API_URL}?part=snippet&maxResults=${maxResults}&q=&type=video&key=${API_KEY}`;
    this.loadData(endpoint);
  }

  loadData = endpoint => {
    const { todosPerPage } = this.state;
    fetch(endpoint)
      .then(result => {
        if (result.status >= 200 && result.status < 300) {
          const _totalPages =
            result.items.length > 0 ? result.items.length / todosPerPage : 0;
          this.setState({
            video: result,
            allVideos: result.items,
            totalPages: _totalPages
          });
        } else {
          if (result.status === 403) {
            alert(
              "Daily Limit Exceeded. The quota will be reset at midnight Pacific Time (PT). You may monitor your quota usage and adjust limits in the API Console: https://console.developers.google.com/apis/api/youtube.googleapis.com/quotas?project=578507554944"
            );
          } else {
            alert("OOPS! Someting wrong, please try again later.");
          }
        }
      })
      .catch(err => {
        alert(err);
      });
  };

  handleKeyUp = e => {
    YTSearch({ key: API_KEY, term: e }, videos => {
      this.setState({
        videos: videos,
        allVideos: videos.items,
        searchTerm: e
      });
    });
  };

  handlePageClick = data => {
    const { maxResults } = this.state;
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);
    const endpoint = `${API_URL}?part=snippet&maxResults=${maxResults}&q=&type=video&key=${API_KEY}`;

    this.setState({ offset: offset, currentPage: selected }, () => {
      this.loadData(endpoint);
    });
  };

  render() {
    const { allVideos, todosPerPage, currentPage } = this.state;
    const startItem = currentPage * todosPerPage;
    const endItem = startItem + todosPerPage;
    const _videoShow = allVideos.slice(startItem, endItem);
    return (
      <div className="App">
        <Header title="Search Video From Youtube " />
        <SearchBar onKeyup={this.handleKeyUp} />
        <VideoList allVideos={_videoShow} />
        {allVideos.length > todosPerPage && (
          <PaginationWrapper>
            <ReactPaginate
              previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
              nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.totalPages}
              marginPagesDisplayed={0}
              pageRangeDisplayed={2}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </PaginationWrapper>
        )}
      </div>
    );
  }
}
