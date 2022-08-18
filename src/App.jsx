import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles';

import Navbar from './components/Navbar';

import Home from './pages/HomePage/Home';
import { Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
