import React from 'react'
import User from './users';
import axios from 'axios';

class UsersRead extends React.Component{

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
            // List of current registered Users
            <div>
            <br></br>
            <h1 id="headMarket">Current Registered Accounts</h1>
            <div className="App-header">
                <h1><User myUsers={this.state.users}></User></h1>
            </div>
            </div>
        );
    }
}
export default UsersRead;