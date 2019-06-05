import React, {Component} from 'react';
// import VideoFrame from './VideoFrame'
class Video extends Component{
  render(){
  
    return (<iframe width="560" height="315" src={this.props.video.videoLink} frameborder="0"  allowfullscreen  />

          
            // <VideoFrame video={this.props}/>
            )
        }
}
export default Video

// onClick={e=>{this.props.onClickVideo(this.props.id)}}