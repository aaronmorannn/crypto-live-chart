import React from 'react';
import WalletItem from './walletItem';

class Market extends React.Component{

    render(){
        return this.props.myCoins.map((wallet)=>{
            return <WalletItem key={wallet._id} wallet={wallet}></WalletItem>
        });
    }
}
export default Market;