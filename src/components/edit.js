import React from 'react';
import axios from 'axios';
import Movies from './movies';

class Edit extends React.Component{
//     constructor(props){
//         super(props);
    
//         this.state = {Title:'',
//                       Year:'',
//                       Poster:'',
//                       _id:''};
    
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
//         this.handleMovieYearChange = this.handleMovieYearChange.bind(this);
//         this.handleMoviePosterChange = this.handleMoviePosterChange.bind(this);
//       }
// componentDidMount(){
//     alert(this.props.match.params.id);

//     axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
//     .then((response)=>{
//         this.setState({
//             _id:response.data._id,
//             Title:response.data.title,
//             Year:response.data.year,
//             Poster:response.data.poster
//         })
//     })
//     .catch();


// }
// handleMovieTitleChange(e){
//     this.setState({Title: e.target.value});
//   }

//   handleMovieYearChange(e){
//     this.setState({Year: e.target.value});
//   }

//   handleMoviePosterChange(e){
//     this.setState({Poster: e.target.value});
//   }

//   handleSubmit(e){
//     alert(this.state.Title+ "      " + this.state.Year 
//     +"       "+ this.state.Poster);
//     e.preventDefault();
    
//     const newMovie = {
//         title: this.state.Title,
//         year: this.state.Year,
//         poster: this.state.Poster
//     };
     
//     axios.put('http://localhost:4000/api/movies/'+this.state._id, 
//     newMovie)
//     .then()
//     .catch();


//     this.setState({Title:'',
//                     Year:'',
//                     Poster:''});    
//   }

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
            <div className="cryptocurrency">
              <h1 id="head">Welcome to Withdraw</h1>
              <Movies myMovies={this.state.movies}></Movies>
            </div>
        )
    }
}

export default Edit;