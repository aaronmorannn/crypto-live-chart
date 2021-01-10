import React from 'react';
import logo from './images/example.png';
import './App.css';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Purchase from './components/purchase';
import Read from './components/read';
import Withdraw from './components/withdraw';
import Register from './components/register';
import Login from './components/login';
import {FaUserCircle} from 'react-icons/fa';
import UsersRead from './components/usersRead';
import Update from './components/update';
import {FiRefreshCw} from 'react-icons/fi'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/content" className="option">Crypto Live Charts</Nav.Link>
              <Nav.Link href="/content" className="option-refresh">Refresh <FiRefreshCw/></Nav.Link>

              {/* <Nav.Link href="/read">Wallet</Nav.Link>
              <Nav.Link href="/purchase">Purchase</Nav.Link>
              <Nav.Link href="/withdraw">Withdraw</Nav.Link>
              <Nav.Link href="/usersRead">Users</Nav.Link> */}



            </Nav>
            <Nav>
            {/* <Nav.Link href="/register"> <FaUserCircle size={50}/></Nav.Link> */}
            </Nav>

          </Navbar>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/content" component={Content} />
            <Route path="/purchase" component={Purchase} />
            <Route path="/read" component={Read} />
            <Route path="/withdraw/:id" component={Withdraw} />
            <Route path="/withdraw" component={Withdraw} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/usersRead" component={UsersRead} />
            <Route path="/update/:id" component={Update} />


          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;