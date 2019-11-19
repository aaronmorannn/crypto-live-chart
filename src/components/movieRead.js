import React from 'react';
import WalletItem from './walletItem';

class MovieRead extends React.Component{

    render(){
        return this.props.myMovies.map((wallet)=>{
            return <WalletItem key={wallet._id} wallet={wallet}></WalletItem>
        });
    }
}
export default MovieRead;