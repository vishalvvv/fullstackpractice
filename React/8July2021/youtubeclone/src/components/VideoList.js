import React from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends React.Component{

     renderVideos = () =>{
         var allVideos = this.props.videos.map(video => {
             //console.log(video);
             return <VideoListItem onVideoSelect={this.props.onVideoSelect} key={video.etag} video={video}></VideoListItem>
         })
         return allVideos;
     }
   
    render(){
        return (
            <div>
                  <ul className="col-md-4 list-group">
      {this.renderVideos()}
    </ul>
            </div>
        )
    }

}
export default VideoList;