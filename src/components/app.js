import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './searchBar';
import VideoList from './video/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDS089xE13S2xxJVLDf12dRdZtTpFqJwuA';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo: null
    };
    this.videoSearch('trending');
  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos, 
        selectedVideo: videos[0]
      }); //syntax sugar
    });
  }
  
  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onTermChange={videoSearch}/>
        <VideoList onChangeVideo={selectedVideo => this.setState({selectedVideo})} selectedVideo={this.state.selectedVideo} videos={this.state.videos}/>
      </div>
    );
  }
}
