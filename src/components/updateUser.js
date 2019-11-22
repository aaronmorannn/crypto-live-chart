import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Update from './update';
import UpdateItem from './updateItem';


class UpdateUser extends React.Component{
    state = {
        users: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/users')
        .then((response)=>{
            this.setState({users: response.data.users})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            
            <div>
            <br></br>
            <h1 id="headMarket">Update Account BTC Address</h1>
            <div className="App-header">
            <h4><UpdateItem myUsers={this.state.users}></UpdateItem></h4>
            </div>
            </div>
        );
    }
}

export default UpdateUser;