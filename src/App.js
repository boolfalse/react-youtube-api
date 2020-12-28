
import React, { Component } from "react";
import fetchJsonp from "fetch-jsonp";
import Suggestions from "./Suggestions";
import "./App.css";

const maxResults = 5;
const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&type=video&key=${process.env.REACT_APP_YOUTUBE_DATA_API_V3_KEY}&q=`;

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  getInfo = () => {
    fetchJsonp(`${API_URL} + ${this.state.query}`)
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        const fetchedData = json.items;
        let suggestions = [];
        fetchedData.forEach(element => {
          suggestions.push({
            videoId: element.id.videoId,
            title: element.snippet.title,
            thumbnail: element.snippet.thumbnails.default.url,
            publishedAt: element.snippet.publishedAt
          });
        });
        this.setState({
          results: [...suggestions]
        });
      })
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          this.getInfo();
        } else {
          this.setState({
            results: []
          });
        }
      }
    );
  };

  render() {
    return (
    <form>
      <div className="wrapper-search">
        <input
            className="searchbar"
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
            list="datalist"
            type="text"
            name="search_p"
            id="search_p"
            aria-label="Search field"
        />
        <a className="btn-submit" href="https://boolfalse.com">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
          >
            <line x1="0" y1="15" x2="23" y2="15"></line>
            <line x1="15" y1="8" x2="23" y2="15"></line>
            <line x1="15" y1="22" x2="23" y2="15"></line>
          </svg>
        </a>
        <div className="container_list">
          <ul id="datalist" className="container_list-wrapper">
            <Suggestions results={this.state.results} />
          </ul>
        </div>
      </div>
    </form>
    );
  }
}

export default Search;
