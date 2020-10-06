import React from 'react';
import Nav from './Nav';
import Trending from './Trending';
import Upload from './Upload';
import Search from './Search';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <>
        <Switch>
          <Route path="/" component={Trending} exact />
          <Route path="/Search" component={Search} exact />
          <Route path="/Upload" component={Upload} exact />
        </Switch>
      </>
    </Router>
  );
}

export default App;
