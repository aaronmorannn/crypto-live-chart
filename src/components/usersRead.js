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
            this.setState({user: response.data.users})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            
            <div>
            <br></br>
            <h1 id="headMarket">Current Registered Users.</h1>
            <div className="App-header">
                <h1><User myUsers={this.state.users}></User></h1>

            </div>
            </div>
        );
    }
}
export default UsersRead;