import React ,{Component} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class AdminAuthorUpdate extends Component
{  
    constructor(props){
        
        super(props);
        console.log(this.props.details);
        this.state={
        authorName:this.props.location.state.details.authorName,
        authorInfo:this.props.location.state.details.authorInfo,
        date_of_birth:new Date(this.props.location.state.details.date_of_birth),
        img:null
        }
     }

    handleauthorNameChange = (e) => {
        this.setState({authorName: e.target.value});
      }
      handledate_of_birthChange = (date) => {
        this.setState({
          date_of_birth: date
        });
      }
      handleImageChange=(e)=>{  
        this.setState({img: e.target.files[0]});    
      }
      handleauthorInfoChange = (e) => {
        this.setState({authorInfo: e.target.value});
      }
      
      handleAuthor = () => {
          console.log(this.props.location.state.details );
          
        var aformData = new FormData();
        aformData.append("authorName",this.state.authorName)
        aformData.append("authorInfo",this.state.authorInfo)
        aformData.append("date_of_birth",this.state.date_of_birth)
        if(this.state.img) aformData.append("img",this.state.img)
        axios.patch('http://localhost:4000/admin/author/'+this.props.location.state.details._id, aformData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          this.props.history.push('/admin/author/')
            console.log(response);
            console.log(response.data);
          }).catch(error => {
            console.log(error);
          });
      }
      
      updateAuthor =(e)=>{
        
        console.log(e.target.value);
        
      }
   
   
        render()
        { 
          return (
           <div>
               <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Author Name</Form.Label>
          <Form.Control type="text" name="authorName" value={this.state.authorName} onChange={this.handleauthorNameChange}/>
          <Form.Label>Author Information</Form.Label>
          <Form.Control type="text" name="authorInfo" value={this.state.authorInfo} onChange={this.handleauthorInfoChange}/>
          <Form.Label>Author Birthday</Form.Label>
          <DatePicker selected={this.state.date_of_birth} 
          onChange={this.handledate_of_birthChange} 
          format='yyyy-MM-dd' 
          placeholder='Enter date' 
          dateFormat="yyyy-MM-dd" 
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          /><br />
          <Form.Label>Author Photo</Form.Label>
          <div className="form-group">
            <input type="file" name="img" onChange={this.handleImageChange}/>
          </div>    
        </Form.Group>
      
       
        <Button variant="primary" type="button" onClick={this.handleAuthor}>
          Submit
        </Button>
      </Form>
             
        </div>
      
      
        )
        }
      
   
   
  
   




}
export default AdminAuthorUpdate