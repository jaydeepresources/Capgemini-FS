import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      progressFlag: true
    }
  }

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.setState({ posts: res.data, progressFlag: false })
      })
  }

  mapCards() {
    var cards = this.state.posts.map((post, index) =>

      <div className="card mb-2" key={post.id}>
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">Posted by user - {post.userId}</h6>
          <p className="card-text">{post.body}</p>
        </div>
      </div>

    )

    return cards
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron py-3 my-3">
          <p className="h1 m-1 text-center">Posts</p>
        </div>
        {
          this.state.progressFlag ? (
            <div className="text-center my-2">
              <i className="fas fa-circle-notch fa-spin fa-4x"></i>
            </div>
          ) : null
        }
        {this.mapCards()}
      </div>
    );
  }
}

export default App;