import React from 'react';

//const VideoPlayer = ({selectedVideo}) => {
  //  console.log("iam in video player");
   // let video=this.props.video;

  // var v=Object.assign({},video);
  // var x = Object.assign({},v.id);
  // let videoId = x.videoId;
  //  return(
    //    <div>
 //<iframe width="560" height="315" src="https://www.youtube.com/embed/Dsh0TfIKhoE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
   //     </div>
  //  )
// }

 class VideoPlayer extends React.Component{

    render(){
        console.log("video player -render called");
     let video=this.props.selectedVideo;

     if(!video){
         return <div>
             <h1>Loading.....</h1>
         </div>
     }

    if(video){
        console.log("video available");
       // console.log(video.id.videoId);
        var videoId=video.id.videoId;
    }

        return(
            <div>

{/*<iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/}
<div className="video-details col-md-8">
    <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoId}`} ></iframe>
    </div>
    <div className="details">
        <h3 className="title">{video.snippet.title}</h3>
        <p className="subtitle">{video.snippet.description}</p>
    </div>
</div>
            </div>
        )
    }
 }
 export default VideoPlayer;