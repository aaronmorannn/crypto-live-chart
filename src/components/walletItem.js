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
    axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
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
  <Card.Header>₿{this.props.movie.amount}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img src={this.props.movie.poster}></img>
      <footer>
      {this.props.movie.year}
      </footer>
    </blockquote>
  </Card.Body>
</Card>
            </div>
        )
    }
}
export default MovieItem;