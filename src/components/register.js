import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Login from './login';
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
    
        e.preventDefault();
        
        
                    const newUser = {
                      uname: this.state.Uname,
                      pword: this.state.Pword,
                    };
              axios.post('http://localhost:4000/api/history',newUser) 
              .then()
              .catch();
              
    
              this.setState({Uname:'',
                      Pword:''});    
      }

    render(){
        return(
            <div className="App-header">
              <h1 id="headMarket">Create Your Wallet</h1>
              <div>
              <hr></hr>
              <form onSubmit={this.handleSubmit}>
                <InputGroup className="mb-3" required> 
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" required>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    required="true"
                    className='form-control'
                    aria-describedby="basic-addon1"
                    value={this.state.Uname}
                    onChange={this.handleUnameChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" required>Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Password"
                    aria-label="Password"
                    type="password"
                    required="true"
                    aria-describedby="basic-addon1"
                    value={this.state.Pword}
                    onChange={this.handlePwordChange}
                    />
                </InputGroup>                
                <Button variant="dark" ><Nav.Link href="/login">Create Account</Nav.Link></Button>
                </form>
                <br></br>
                <hr></hr>
                Already have an account?
                <br></br>
                <Button variant="dark" ><Nav.Link  href="/login">Log In</Nav.Link></Button>


            </div>
            </div>
        )
    }
}

export default Register;