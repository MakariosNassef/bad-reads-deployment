import React ,{Component,Fragment} from 'react';
import {Table} from 'react-bootstrap';
var moment = require('moment');

class AdminBookList extends Component{
 render()
 {  
 
  return(
    <Fragment>
   
      
      <tr>
   
      <td>{this.props.details.bookId}</td>
      <td>{this.props.details.bookName}</td>
      <td>{this.props.details.category}</td>
      <td>{this.props.details.author}</td>

      <td>{this.props.details.img}</td>
        
      <td><button onClick={()=>{this.props.Submit(this.props.details)}} >Update</button> 
      <button onClick={()=>{this.props.handledeletebook(this.props.index)}} >Delete</button>
      
      </td>
     

      </tr>
       
   
 </Fragment>

     
)



}




}
export default AdminBookList;