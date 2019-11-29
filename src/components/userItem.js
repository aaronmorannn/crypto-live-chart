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
        this.UpdateUser = this.UpdateUser.bind(this);
      }
    
      UpdateUser(e){
        axios.delete("http://localhost:4000/api/users/"+this.props.details._id)
        .then()
        .catch();
    
      }


    render(){

        return(
            <div>
            <Card  border="primary" style={{ width: '28rem' }}>
            <Card.Header><h3 id="username">Username : {this.props.details.uname} </h3></Card.Header>
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