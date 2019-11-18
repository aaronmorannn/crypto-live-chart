import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


class Login extends React.Component{

    render(){
        return(
            <div className="App-header">
              <h1 id="headMarket">Login To Your Wallet</h1>
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
                <hr></hr>

                <Button variant="dark" onClick={this.DeleteMovie}><Nav.Link  href="/content">Log In</Nav.Link></Button>
                <br></br>
            


            </div>
            </div>
        )
    }
}

export default Login;