import React, {Component} from 'react';
class Comment extends Component{
 render(){
     return (
         <ul>
             <li>
                 {this.props.user}
                 <p>
                     {this.props.content}
                 </p>
             </li>
         </ul>
     )
 }
}
export default Comment