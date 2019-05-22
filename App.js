import React, { Component } from 'react';

class App extends Component {

  localHeight;
  localWidth;

  constructor() {
    super();
    this.localHeight = 100;
    this.localWidth = 150;
    this.state = {
      height: this.localHeight,
      width: this.localWidth
    }
  }

  zoomIn() {
    if (this.localHeight + 10 <= 300 && this.localWidth + 10 <= 300) {
      this.localHeight += 10;
      this.localWidth += 10;
      this.setState({
        height: this.localHeight,
        width: this.localWidth
      })
    }
  }

  zoomOut() {
    if (this.localHeight - 10 >= 100 && this.localWidth - 10 >= 100) {
      this.localHeight -= 10;
      this.localWidth -= 10;
      this.setState({
        height: this.localHeight,
        width: this.localWidth
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron py-3 my-4">
          <p className="display-4 text-center mb-0">Image</p>
        </div>
        <div className="d-flex justify-content-center">
          <img src={require('./react.png')} alt="image_" height={this.state.height + 'px'} width={this.state.width + 'px'} />
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-outline-dark btn-lg" onClick={() => this.zoomOut()}>
            <i className="fas fa-search-minus"></i>
          </button>
          <button className="btn btn-outline-dark btn-lg" onClick={() => this.zoomIn()}>
            <i className="fas fa-search-plus"></i>
          </button>
        </div>

      </div>
    );
  }
}

export default App;
