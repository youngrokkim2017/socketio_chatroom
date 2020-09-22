import React from 'react';
// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './components/pages/login_page';
import RegisterPage from './components/pages/register_page';
import DashboardPage from './components/pages/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Route exact path="/dashboard" component={DashboardPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
