import React from 'react';
import UserItem from './userItem';

class Users extends React.Component{

    render(){
        return this.props.myUsers.map((users)=>{
            return <UserItem key={users._id} users={users}></UserItem>
        });
    }
}
export default Users;