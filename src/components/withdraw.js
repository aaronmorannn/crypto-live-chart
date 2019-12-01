import React from 'react';
import axios from 'axios';
import Coins from './coins';

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

             <Coins myCoins={this.state.coins}></Coins>

            </div>
             </div>
        )
    }
}

export default Withdraw;