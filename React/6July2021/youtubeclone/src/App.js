import React from 'react';
import './App.css';
import YTSearch  from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

const API_KEY = "AIzaSyB3DZODLXNdTpMOUVCEPypd5Az5Tvy2LIw";


class App extends React.Component{

  constructor(){
    super();
    this.state= {
      videos: [],
      selectedVideo:null
    }
  }

   componentDidMount(){
     console.log("inside component did mount!");
YTSearch({term:'cricket',key:API_KEY}, (videos) => {
  console.log(videos);
   this.setState({videos:videos, selectedVideo:videos[0]})
})

   }
  render(){
    return(
      <div>
        <VideoPlayer selectedVideo={this.state.selectedVideo}></VideoPlayer>
        <VideoList videos={this.state.videos}></VideoList>
      </div>
    )
  }

}

export default App;
