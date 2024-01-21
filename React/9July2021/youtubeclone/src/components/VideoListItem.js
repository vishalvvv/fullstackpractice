import React from 'react';

class VideoListItem extends React.Component{
           
     render(){
         return(
             <div>
                   {/* <li onClick={() => {  this.props.onVideoSelect(this.props.video) } } >{this.props.video.snippet.title}
                   <img src={this.props.video.snippet.thumbnails.default.url}></img></li> */}

<li onClick={() => this.props.onVideoSelect(this.props.video)} className="list-group-item" id={this.props.video.id.videoId}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object"  src={this.props.video.snippet.thumbnails.default.url} />
          </div>

          <div className="media-body">
            <div className="media-heading">
              {this.props.video.snippet.title}
            </div>
          </div>
        </div>


    </li>

             </div>
         )
     }

}
export default VideoListItem;