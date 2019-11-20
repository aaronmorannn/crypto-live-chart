import React from 'react'
import Market from './market';
import axios from 'axios';

class Read extends React.Component{

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
            
            <div>
            <br></br>
            <h1 id="headMarket">Welcome to your Wallet</h1>
            <div className="App-header">
                <h4>Below displays your recent purchase history</h4>
                <h1><Market myCoins={this.state.coins}></Market></h1>

            </div>
            </div>
        );
    }
}
export default Read;