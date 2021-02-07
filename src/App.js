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
          <a href="/content" className="option">Crypto Live Charts</a>
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