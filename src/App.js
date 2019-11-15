import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/content">Crypto Market</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/content">Market</Nav.Link>
              <Nav.Link href="/read">Wallet</Nav.Link>
              <Nav.Link href="/create">Purchase</Nav.Link>
              <Nav.Link href="/edit">Withdraw</Nav.Link>

            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/content" component={Content} />
            <Route path="/create" component={Create} />
            <Route path="/read" component={Read} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/edit" component={Edit} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
