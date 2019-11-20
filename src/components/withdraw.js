import React from 'react';
import axios from 'axios';
import Coins from './coins';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Withdraw extends React.Component{


state = {
  coins: []
};

componentDidMount() {
  axios.get('http://localhost:4000/api/coins')
  .then((response)=>{
      this.setState({coins: response.data.coins})
  })
  .catch((error)=>{
      console.log(error);
  });
}

    render(){
        return(
          <div className="App-header"> 
          <br></br>
          <h1 id="headMarket">Withdraw a Purchase</h1>
              <div className='cryptocurrency-withdraw'>
              <label id="head">Search for Recipient's Purchases</label>
              <TextField
              type="number"
              id="standard-basic"
              label="Enter BTC Address."
              margin="normal"
              required="true"
              className='form-control'
              value={this.state.Amount}
              onChange={this.handleMovieTitleChange}
            />
            {/* </div>
            <div className="App-header"> */}
             <Coins myCoins={this.state.coins}></Coins>
            </div>
            <br></br>
            </div>
        )
    }
}

export default Withdraw;