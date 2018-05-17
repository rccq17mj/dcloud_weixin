import React, { Component } from 'react';
import Default from './layout/default/default';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <HashRouter>
          <Default/>
        </HashRouter>
    );
  }
}

export default App;
