import React from 'react';
// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './components/pages/login_page';
import RegisterPage from './components/pages/register_page';
import DashboardPage from './components/pages/dashboard';
import IndexPage from './components/pages/index';
import ChatroomPage from './components/pages/chatroom';
import Chatroom from './components/pages/chatroom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Route exact path="/dashboard" component={DashboardPage}></Route>
          <Route exact path="/" component={IndexPage}></Route>
          <Route exact path="/chatroom/:id" component={ChatroomPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
