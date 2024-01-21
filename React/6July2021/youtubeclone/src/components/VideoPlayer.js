import React from 'react';

class VideoPlayer extends React.Component{

     render(){
                var obj= this.props.selectedVideo;
                var id=JSON.stringify(obj);
                 id= JSON.parse(id);
                 console.log(id.id.videoId);

         return(
             <div>

<iframe width="560" height="315" src={`https://www.youtube.com/embed/`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                
             </div>
         )
     }

}
export default VideoPlayer;