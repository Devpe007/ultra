import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles';

import Navbar from './components/Navbar';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';

import Home from './pages/HomePage/Home';
import { Footer } from './components';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
