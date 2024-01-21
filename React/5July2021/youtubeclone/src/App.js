import React from 'react';

import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import SearchBar from './components/SearchBar';
import Header from './components/Header';


const API_KEY="AIzaSyCORmZsXTsbwnpmJKEHbAv44E3VNZtuz5c";



class App extends React.Component{
         
  

  render(){
    console.log("App component render called!")
    return(
      <div className="row">
        
       <Header/>
      </div>
    )
  }
}



export default App;
