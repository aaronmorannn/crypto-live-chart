import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Login from './login';


class Register extends React.Component{

    render(){
        return(
            <div className="App-header">
              <h1 id="headMarket">Create Your Wallet</h1>
              <div>
              <hr></hr>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Password"
                    aria-label="Password"
                    type="password"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                
                <Button variant="dark" ><Nav.Link href="/content">Create Account</Nav.Link></Button>
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