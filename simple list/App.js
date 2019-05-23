import React, { Component } from 'react';

class App extends Component {



  constructor() {
    super();
    this.state = {
      beverages: [
        "tea",
        "coffee",
        "milk"
      ]
    }
  }


  getBeverages() {
    const beverages = this.state.beverages.map(
      (beverage, index) =>
        <li className="list-group-item" key={index}>
          {beverage}
        </li>
    )
    return beverages
  }


  render() {
    return (
      <div className="container">
        <div className="jumbotron py-3 my-4">
          <p className="display-4 text-center mb-0">Iterative Rendering</p>
        </div>

        <ul className="list-group">
          {this.getBeverages()}
        </ul>

      </div>
    );
  }
}

export default App;