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
            <br></br>
            <h1 id="headMarket">Welcome to your Wallet</h1>
            <div className="App-header">
                <h4>Below displays your recent purchase history</h4>
                <h1><MovieRead myMovies={this.state.movies}></MovieRead></h1>

            </div>
            </div>
        );
    }
}
export default Read;