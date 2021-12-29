import React, { Component } from 'react';
import Axios from 'axios';

class Movies extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    Axios.get('http://localhost:5000/users').then((res) => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
