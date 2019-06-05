import React, {Component} from 'react';
import Video from './Video';

class NextUp extends Component{

    
  render(){
  
      return (
      <div>
          <Video video={this.props} onClickVideo={this.props.onClickVideo}/>
      </div>
      )}

}
export default NextUp