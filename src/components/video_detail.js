import React from 'react';



const VideoDetail = ({video}) => {

  if(!video){
    return<div> Loading.....</div>;
  }


  const videoId = video.id.videoId;
  const url =`https://www.youtube.com/embed/${videoId}`;

  console.log(url)
  return(
    <div className = "video-detail col-md-8">
        <div className = "embed-responsive embed-reponsive-16by9" style={{height:"60vh"}}>
            <iframe className="embed-reponsive-item" height="1000"frameborder="1" src ={url}></iframe>
        </div>

        <div className="detail">
           <div>{video.snippet.title}</div>
           <div>{video.snippet.description}</div>
        </div>
    </div>
  )
}

export default VideoDetail
