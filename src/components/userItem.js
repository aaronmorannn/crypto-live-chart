import React from 'react';
import Card from 'react-bootstrap/Card';
import {FaRegEdit} from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';


class UserItem extends React.Component{


    render(){
        return(
            <div>
            <Card  border="primary" style={{ width: '28rem' }}>
            <Card.Header><h1 id="username">Username : {this.props.details.uname} </h1></Card.Header>
            <br></br>
            <h5 id="address">BTC Address :({this.props.details.btcADD})</h5>
            <Nav.Link href="/updateUser"><FaRegEdit size="25" color="green"></FaRegEdit></Nav.Link> 
            </Card>
            <br></br>
            </div>
        )
    }
}
export default UserItem;