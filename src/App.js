import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import About from './about'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
