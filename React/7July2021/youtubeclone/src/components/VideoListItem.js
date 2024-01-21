import React from 'react';

class VideoListItem extends React.Component{
           
     render(){
         return(
             <div>
                   <li onClick={() => {  this.props.onVideoSelect(this.props.video) } } >{this.props.video.snippet.title}
                   <img src={this.props.video.snippet.thumbnails.default.url}></img></li>
             </div>
         )
     }

}
export default VideoListItem;