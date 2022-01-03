import React, { Component } from 'react';
import Axios from 'axios';

class Movies extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    Axios.get('http://localhost:5000/movies').then((res) => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Rated</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user._id}>
                <td>{user.title}</td>
                <td>{user.rated}</td>
                <td>{user.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
