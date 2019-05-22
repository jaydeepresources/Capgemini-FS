import React, { Component } from 'react';

class App extends Component {

  localColor;
  localNo;

  constructor() {
    super();

    this.localColor = 'text-primary';
    this.localNo = 0;

    this.state = {
      no: this.localNo,
      numColor: this.localColor
    };
  }

  setColor() {
    this.localColor = (this.localNo === 0) ? 'text-primary' : (this.localNo > 0) ? 'text-success' : 'text-danger';
  }

  increase() {
    this.localNo++;
    this.setColor();
    this.setState({
      no: this.localNo,
      numColor: this.localColor
    });
  }

  decrease() {
    this.localNo--;
    this.setColor();
    this.setState({
      no: this.localNo,
      numColor: this.localColor
    });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron py-3 my-4">
          <p className="display-4 text-center mb-0">Number Operations</p>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary" onClick={() => this.decrease()}>
            <i className="fas fa-minus"></i>
          </button>
          <span className={'mx-3 lead ' + this.state.numColor}>{this.state.no}</span>
          <button className="btn btn-primary" onClick={() => this.increase()}>
            <i className="fas fa-plus"></i>
          </button>
        </div>

      </div>
    );
  }
}

export default App;
