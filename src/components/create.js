import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class Create extends React.Component {

  
  constructor(props){
    super(props);

    this.state = {Amount:'',
                  Year:'',
                Poster:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
    this.handleMovieYearChange = this.handleMovieYearChange.bind(this);
    this.handleMoviePosterChange = this.handleMoviePosterChange.bind(this);
  }
  
  handleMovieTitleChange(e){
    this.setState({Amount: e.target.value});
  }

  handleMovieYearChange(e){
    this.setState({Year: e.target.value});
  }

  handleMoviePosterChange(e){
    this.setState({Poster: e.target.value});
  }

  handleSubmit(e){
    alert("Your purchase for the amount €"+this.state.Amount+ " has been received check you updated balance in the Wallet tab.      " + this.state.Year 
    +"       "+ this.state.Poster);
    e.preventDefault();
    
    
                const newMovie = {
                  amount: this.state.Amount,
                  year: this.state.Year,
                  poster: this.state.Poster
                };
          axios.post('http://localhost:4000/api/movies',newMovie) 
          .then()
          .catch();
          

          this.setState({Amount:'',
                  Year:'',
                Poster:''});    
  }

  render() {


    return (
      <div className="App-header">
        {/* <h1 id="head">Purchase Crypto</h1> */}
        <form onSubmit={this.handleSubmit}>
        <div className='cryptocurrency-purchase'>
          <label id="head">Purchase Amount(BTC)</label>
          {/* <input
          type='number'
          className='form-control'
          value={this.state.Amount}
          onChange={this.handleMovieTitleChange}
          ></input> */}
          <TextField
          type="number"
          id="standard-basic"
          label="Enter Value."
          margin="normal"
          className='form-control'
          value={this.state.Amount}
          onChange={this.handleMovieTitleChange}
        />
        </div>
       
        <div>
          <Button
          type="submit"
          value="Preview Purchase"
          variant="contained" color="primary">
            Preview Purchase
          </Button>
        </div>
        </form>
      </div>
    );
  }
}

export default Create;