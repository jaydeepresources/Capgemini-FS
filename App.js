import React, { Component } from 'react';
import Header from './Header';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header name="John"/>
      </div>
    );
  }
}

export default App;