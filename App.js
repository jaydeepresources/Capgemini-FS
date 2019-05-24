import React, { Component } from 'react';
import User from './model/User';

class App extends Component {

  user: User

  constructor() {
    super();
    this.user = new User()
    this.state = {
      user: this.user
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    alert('username: ' + this.state.user.email)
    event.preventDefault();
  }

  handleEmailChange(event) {
    this.user.email = event.target.value
    this.setState({
      user: this.user
    })
  }

  handlePasswordChange(event) {
    this.user.password = event.target.value
    this.setState({
      user: this.user
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron py-3 my-4">
          <p className="display-4 text-center mb-0">Login Form</p>
        </div>

        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label>Email address</label>
              <input type="text" className="form-control" placeholder="Enter email" value={this.state.user.email} onChange={this.handleEmailChange} />
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" className="form-control" placeholder="Password" value={this.state.user.password} onChange={this.handlePasswordChange} />
            </div>
            <button className="btn btn-primary" type="submit" >Submit</button>
          </fieldset>
        </form>

      </div>
    );
  }
}

export default App;