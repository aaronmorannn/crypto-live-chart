import React from 'react';
import MovieItem from './movieitem';

class Movies extends React.Component{

    render(){
        return this.props.myMovies.map((wallet)=>{
            return <MovieItem key={wallet._id} wallet={wallet}></MovieItem>
        });
    }
}
export default Movies;