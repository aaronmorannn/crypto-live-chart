import React from 'react';
import logo from './images/example.png';
import './App.css';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';
import Register from './components/register';
import Login from './components/login';
import {FaUserCircle} from 'react-icons/fa';





class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/content"> <img src={logo} width="100px" height="90px"></img></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/content">Market</Nav.Link>
              <Nav.Link href="/read">Wallet</Nav.Link>
              <Nav.Link href="/create">Purchase</Nav.Link>
              <Nav.Link href="/edit">Withdraw</Nav.Link>


            </Nav>
            <Nav.Link href="/register"> <FaUserCircle/></Nav.Link>

          </Navbar>
          <Switch>
            <Route exact path="/" component={Register} />
            <Route exact path="/content" component={Content} />
            <Route path="/create" component={Create} />
            <Route path="/read" component={Read} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/edit" component={Edit} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />



          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;