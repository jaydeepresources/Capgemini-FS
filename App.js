import React, { Component } from 'react';

class App extends Component {
  appStyle = {
    margin: 10,
    padding: 10,
    fontSize: 30,
    color: 'blue',
    backgroundColor: 'whitesmoke',
    textAlign: 'center',
    border: 1 + 'px chocolate solid'
  }

  render() {
    return (
      <div>
        <div style={
          {
            margin: 10,
            padding: 10,
            fontSize: 30,
            color: 'blue',
            backgroundColor: 'whitesmoke',
            textAlign: 'center',
            border: 1 + 'px chocolate solid'
          }
        }>
          <p>Inline CSS using JSX !</p>
        </div>

        <div style={this.appStyle}>
          <p>Inline CSS using JSX Object!</p>
        </div>
      </div>
    );
  }
}

export default App;