import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Login from './login';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';



class Register extends React.Component{

    constructor(props){
        super(props);
    
        this.state = {Uname:'',
                      Pword:''};
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUnameChange = this.handleUnameChange.bind(this);
        this.handlePwordChange = this.handlePwordChange.bind(this);

      }
      
      handleUnameChange(e){
        this.setState({Uname: e.target.value});
      }

      handlePwordChange(e){
        this.setState({Pword: e.target.value});
      }

      handleSubmit(e){
        alert("Your Account has been successfully created." + " Welcome " + this.state.Uname);
        e.preventDefault();
      
                    const newUser = {
                      uname: this.state.Uname,
                      pword: this.state.Pword,
                    };
              axios.post('http://localhost:4000/api/user',newUser) 
              .then()
              .catch();
              
            this.setState({Uname:'',
            Pword:''});    
      }

    render(){
        return(
          <div className="App-header">
          <h3>Create Account</h3>
          <hr></hr>

          <form onSubmit={this.handleSubmit}>
          <div className='forms'>
            <TextField
            type="text"
            id="standard-basic"
            label="Username."
            margin="normal"
            required="true"
            className='form-control'
            value={this.state.Uname}
            onChange={this.handleUnameChange}
          />
          </div>
          <br></br>
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
          <div>
            <Button
            variant="dark" 
            type="submit"
            value="Create Account"
            color="primary">
            Create Account
            </Button>
          
          </div>
          <hr></hr>

          </form>
                <br></br>
                <hr></hr>
                Already have an account?
                <br></br>
                <Button variant="dark" ><Nav.Link  href="/login">Log In</Nav.Link></Button>

            </div>
        )
    }
}

export default Register;