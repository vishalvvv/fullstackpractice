import React from 'react';

class VideoListItem extends React.Component{

     render(){
         return(
             <div>
                   <li>{this.props.video.snippet.title}
                   <img src={this.props.video.snippet.thumbnails.default.url}></img></li>
             </div>
         )
     }

}
export default VideoListItem;