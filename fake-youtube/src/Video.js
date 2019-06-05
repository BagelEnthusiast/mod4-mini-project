import React, {Component} from 'react';
// import VideoFrame from './VideoFrame'
class Video extends Component{
  render(){
  console.log(this.props.video.onClickVideo)
    return (
        <div>
    <iframe onMouseOver={()=>{ this.props.video.onClickVideo(this.props.video.id)}} width="560" height="315" src={this.props.video.videoLink} frameborder="0"  allowfullscreen  />
    </div>
          
            // <VideoFrame video={this.props}/>
            )
        }
}
export default Video

// onClick={e=>{this.props.onClickVideo(this.props.id)}}
//this.props.video.id