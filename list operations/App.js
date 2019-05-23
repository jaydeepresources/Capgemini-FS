import React, { Component } from 'react';

class App extends Component {

  newBeverage

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
        <li className="list-group-item d-flex justify-content-between align-items-center" key={index} >
          {beverage}
          <button className="btn btn-link" onClick=
            {() => this.deleteBeverage(index)}>
            <i className="fas fa-times text-danger"></i>
          </button>
        </li>
    )
    return beverages
  }

  addBeverage() {
    var list = this.state.beverages
    list.push(this.newBeverage.value)
    this.setState({
      beverages: list
    })
    this.newBeverage.value = ''
  }

  deleteBeverage(index) {
    var list = this.state.beverages
    list.splice(index, 1)
    this.setState({
      beverages: list
    })
  }

  resetBeverages() {
    this.setState({
      beverages: [
        "tea",
        "coffee",
        "milk"
      ]
    })
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

        <div className="form-group mt-2 mb-2">
          <input type="text" className="form-control" placeholder="enter new beverage"
            ref={(input) => this.newBeverage = input} />
        </div>

        <button className="btn btn-primary mr-2" onClick={() => this.addBeverage()}>
          <i className="fas fa-plus"></i>
        </button>
        <button className="btn btn-info" onClick={() => this.resetBeverages()}>
          <i className="fas fa-undo"></i>
        </button>

      </div>
    );
  }
}

export default App;