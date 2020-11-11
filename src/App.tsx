import React from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import Rvsp from 'pages/rvsp/rvsp';
import Form from './pages/form/form';

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Route path="/pickdate" component={Form} />
      <Route path="/rvsp/:id/:date/:time" component={Rvsp} />
    </Router>
  );
}

export default App;
