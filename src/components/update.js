import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button';

class Edit extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {Uname:'',
                      Pword:'',
                      BTC:'',
                      _id:''};
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
        this.handlePwordChange = this.handlePwordChange.bind(this);
        this.handleBTCChange = this.handleBTCChange.bind(this);
      }

    componentDidMount(){
    // swal("You're about to Update your username. " + this.props.match.params.id);


    axios.get('http://localhost:4000/api/users/'+this.props.match.params.id)
    .then((response)=>{
        this.setState({
            _id:response.data._id,
            Uname:response.data.uname,
            Pword:response.data.pword,
            BTC:response.data.btc
        })
    })
    .catch();
}

  handleMovieTitleChange(e){
    this.setState({Uname: e.target.value});
  }

  handlePwordChange(e){
    this.setState({Pword: e.target.value});
  }

  handleBTCChange(e){
    this.setState({BTC: e.target.value});
  }

  handleSubmit(e){
    swal("Congratulations "+ this.state.Uname+"!", "You have Updated your account!", "success");
    e.preventDefault();
    
    const newMovie = {
        uname: this.state.Uname,
        pword: this.state.Pword,
        btc: this.state.BTC
    };

    axios.put('http://localhost:4000/api/users/'+this.state._id, 
    newMovie)
    .then()
    .catch();


    this.setState({Uname:'',
                   Pword:'',
                    BTC:''});    
  }
    render(){
        return(
        <div className="App-header">
            <h1>Update your Account</h1>
            <form onSubmit={this.handleSubmit}>
          <div className="forms">
          <TextField
            type="password"
            id="standard"
            label="Password."
            margin="normal"
            className='form-control'
            required="true"
            value={this.state.Pword}
            onChange={this.handlePwordChange}
          />
          </div>
         <br></br>
         <div className="forms">
          <TextField
            type="text"
            id="standard"
            label="BTC Address."
            margin="normal"
            className='form-control'
            required="true"
            value={this.state.BTC}
            onChange={this.handleBTCChange}
          />
          </div>
          <div>
            <Button
            variant="dark" 
            type="submit"
            value="Update"
            color="primary">
            Update Account
            </Button>
          
          </div>
            </form>
            </div>
        )
    }
}
export default Edit;