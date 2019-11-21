import React from 'react';
import Card from 'react-bootstrap/Card';


class UserItem extends React.Component{

    render(){
        return(
            <div>
            <Card  border="primary" style={{ width: '28rem' }}>
            <Card.Header>Username : {this.props.users.uname}</Card.Header> 
            {/* <h5 id="address">BTC Address : ({this.props.users.btcADD})</h5> */}
            </Card>
            <br></br>
            </div>
        )
    }
}
export default UserItem;