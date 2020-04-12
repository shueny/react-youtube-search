import React from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { PaginationWrapper } from "./components/PaginationStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const URL = "https://www.googleapis.com/youtube/v3/search";
const API_TOKEN = "AIzaSyBKYFGvFdL1hn1NHXIbt9apRShM0CTbErk";
export default class App extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    perPage: PropTypes.number.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      maxResults: 10,
      video: [],
      allVideos: [],
      searchKeyWords: "",
      currentPage: 1,
      todosPerPage: 3,
      upperPageBound: 3,
      lowerPageBound: 0,
      isPrevBtnActive: "disabled",
      isNextBtnActive: "",
      pageBound: 3,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
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
            "Content-Type": "application/json",
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({ video: data, allVideos: data.items });
      })
      .catch((err) => {});
  }

  onKeyUp = (e) => {
    // const { allVideos } = this.state;
    // console.log(e.target.value);
    // console.log(allVideos.items);
    // this.loadData(e);
    // const post = allVideos.filter(item => console.log(item));
    // item.title.rendered.toLowerCase().includes(e.target.value.toLowerCase())
    this.setState({ searchKeyWords: e });
  };

  handleSearch = (data) => {
    const { maxResults, video, allVideos } = this.state;
    axios
      .get(
        URL +
          "?part=snippet&maxResults=" +
          maxResults +
          "&q=" +
          data +
          "&type=video&key=" +
          API_TOKEN,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({ video: data, allVideos: data.items });
      })
      .catch((err) => {});
  };

  handlePageClick = (data) => {
    console.log(data);
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({ offset: offset, currentPage: data.selected + 1 }, () => {
      this.loadData();
    });
  };

  render() {
    const { allVideos, searchKeyWords } = this.state;
    return (
      <div className='App'>
        <Header />
        <SearchBar
          onKeyup={this.onKeyUp}
          onSearch={this.handleSearch}
          searchTexts={searchKeyWords}
        />{" "}
        <VideoList allVideos={allVideos} />{" "}
        <PaginationWrapper>
          <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
            nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />{" "}
        </PaginationWrapper>{" "}
      </div>
    );
  }
}
