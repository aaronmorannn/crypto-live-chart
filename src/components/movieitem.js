import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class MovieItem extends React.Component{

  constructor(){
    super();
    this.DeleteMovie = this.DeleteMovie.bind(this);
  }

  DeleteMovie(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/movies/"+this.props.wallet._id)
    .then()
    .catch();

  }

    render(){
        return(
            <div>
                {/* <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster}></img> */}


  <Card  border="primary" style={{ width: '28rem' }}>
  <h1><Card.Header>₿{this.props.wallet.amount}</Card.Header></h1>
  <Button variant="dark" onClick={this.DeleteMovie}>Withdraw</Button>
</Card>
            </div>
        )
    }
}
export default MovieItem;