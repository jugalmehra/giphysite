import React from 'react';
import Nav from './Nav';
import Trending from './Trending';
import Upload from './Upload';
import Search from './Search';
import Previewpage from './Previewpage'
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
          <Route path="/Previewpage/:id" component={Previewpage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
