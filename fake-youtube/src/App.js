import React, {Component} from 'react';
import Header from './Header';
import NextUp from './NextUp';
import VideoFrame from './VideoFrame'


class App extends Component{
  constructor(){
    super()
    this.state={
      videos: []
    }
    this.fetchVids()
  }


  fetchVids = () => {
    fetch('/api/videos')
    .then(res=>res.json())
    .then(data=>{
      
      this.setState({
        videos:data
        // video:[]
      })
    })
  }

  // onClickVideo = (id) =>{
  //   this.setState({
  //     video: this.state.videos.find(vid =>{
  //       if (vid.id === id){
  //         return vid
  //       }
  //     })
  //   })
  // }

    render(){
    

      return (
        <div className="wrapper">
          <div className="menuBar">
              <Header />
          </div>
          <div className="nextVideo">
            {this.state.videos.map(vid => <NextUp {...vid} />)}
          </div>
          <div className="videoFrame">
            <VideoFrame {...this.state.video}/>
          </div>
        </div>
      )
    }
}

export default App;
// {this.state.videos.length === 0 ? console.log("still empty") : this.state.videos.map(video=> <NextUp video={video}/>)}
// onClickVideo={this.onClickVideo(vid.id)}