import React from 'react';
import WalletItem from './walletItem';

class MovieRead extends React.Component{

    render(){
        return this.props.myMovies.map((movie)=>{
            return <WalletItem key={movie._id} movie={movie}></WalletItem>
        });
    }
}
export default MovieRead;