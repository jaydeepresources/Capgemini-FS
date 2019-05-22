import React, { Component } from 'react';

class App extends Component {

  title = "React App"

  test() {
    console.log("test")
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <span className="h2">{this.title}</span>
        </div>

        <button className="btn btn-primary" onClick={() => this.test()}>click me</button>

      </div>
    );
  }
}

export default App;
