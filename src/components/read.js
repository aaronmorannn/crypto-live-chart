import React from 'react'
import MovieRead from './movieRead';
import axios from 'axios';
import Content from './content';


class Read extends React.Component{

    state = {
        movies: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({movies: response.data.movies})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            
            <div>
            <h1 id="head">Welcome to your Wallet</h1>
            <div className="cryptocurrency">
                <h4>Below displays your recent purchase history</h4>
                <h1><MovieRead myMovies={this.state.movies}></MovieRead></h1>
                <h3>BTC</h3>

            </div>
            </div>
        );
    }
}
export default Read;