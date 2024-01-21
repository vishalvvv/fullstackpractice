import React from 'react';
import YTSearch  from 'youtube-api-search';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import SearchBar from './SearchBar';
const API_KEY = "AIzaSyB3DZODLXNdTpMOUVCEPypd5Az5Tvy2LIw";

class Dashboard extends React.Component{

  constructor(){
    console.log("constructor called");
    super();
    this.state= {
      videos: [],
      selectedVideo:null
    }
  }

   componentDidMount(){
     console.log(" component did mount! called");
      this.videoSearch("cricket");
   }

    videoSearch =(term) =>{
      YTSearch({term:term,key:API_KEY}, (videos) => {
        //console.log(videos);
         this.setState({videos:videos, selectedVideo:videos[0]})
      })
    }
  render(){
    console.log("App component render called!");
    return(
      <div className="row">
         <SearchBar onSearchItem = { term => {this.videoSearch(term)}} /> <br></br><br></br>
        <VideoPlayer  selectedVideo={this.state.selectedVideo}></VideoPlayer>
        <VideoList onVideoSelect={ (video) => { this.setState({selectedVideo:video}) }} videos={this.state.videos}></VideoList>
      </div>
    )
  }

}

export default Dashboard;
