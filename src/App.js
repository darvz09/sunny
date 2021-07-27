import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import { GlobalStyle } from './Component/GlobalStyles';

import './App.css';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

    </Router>
  );
}

export default App;
