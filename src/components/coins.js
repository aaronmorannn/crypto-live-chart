import React from 'react';
import CoinItem from './coinItem';

class Coins extends React.Component{

    render(){
        return this.props.myCoins.map((wallet)=>{
            return <CoinItem key={wallet._id} wallet={wallet}></CoinItem>
        });
    }
}
export default Coins;