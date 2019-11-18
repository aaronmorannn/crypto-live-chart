import React from 'react';
import axios from 'axios';
import Movies from './movies';


class Withdraw extends React.Component{


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
          <h1 id="headMarket">Withdraw a Purchase</h1>
            <div className="App-header">
             <Movies myMovies={this.state.movies}></Movies>
            </div>
            </div>
        )
    }
}

export default Withdraw;