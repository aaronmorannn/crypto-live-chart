import React from 'react';
import UpdateItem from './updateItem';

class Update extends React.Component{

    render(){
        return this.props.myUsers.map((details)=>{
            return <UpdateItem key={details._id} details={details}></UpdateItem>
        });
    }
}
export default Update;