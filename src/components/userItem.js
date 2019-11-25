import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {FaRegEdit} from 'react-icons/fa';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



class UserItem extends React.Component{

    constructor(){
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
      }
    
      DeleteMovie(e){
        console.log("Delete Clicked");
        axios.delete("http://localhost:4000/api/users/"+this.props.details._id)
        .then()
        .catch();
    
      }


    render(){
        return(
            <div>
            <Card  border="primary" style={{ width: '28rem' }}>
            <Card.Header><h1 id="username">Username : {this.props.details.uname} </h1></Card.Header>
            <br></br>
            <h5 id="address">BTC Address :({this.props.details.btc})</h5>
            <Nav.Link href={"/update/"+ this.props.details._id}><FaRegEdit size="25" color="green"></FaRegEdit></Nav.Link> 

            <br></br>
            </Card> 
            <br></br>

            </div>



        )
    }
}
export default UserItem;