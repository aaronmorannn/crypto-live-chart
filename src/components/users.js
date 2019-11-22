import React from 'react';
import UserItem from './userItem';

class Users extends React.Component{

    render(){
        return this.props.myUsers.map((details)=>{
            return <UserItem key={details._id} details={details}></UserItem>
        });
    }
}
export default Users;