import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class CoinItem extends React.Component{

  constructor(){
    super();
    this.DeleteCoin = this.DeleteCoin.bind(this);
  }

  DeleteCoin(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/coins/"+this.props.wallet._id)
    .then()
    .catch();

  }

    render(){
        return(
            <div>              
            <br></br>
            <Card  border="primary" style={{ width: '28rem' }}>
            <h1><Card.Header>₿{this.props.wallet.amount}</Card.Header></h1>
            </Card>
            <hr></hr>
            <Button className="delete" variant="dark" onClick={this.DeleteCoin}>Withdraw</Button>
            <br></br>
            </div>
        )
    }
}
export default CoinItem;