import React, { Component } from 'react';
import Axios from 'axios';

class Users extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    Axios.get('http://localhost:5000/users').then((res) => {
      this.setState({ users: res.data });
    });
  }

  handleDelete = (user) => {
    Axios.delete('http://localhost:5000/users/' + user._id).then((res) => {
      Axios.get('http://localhost:5000/users').then((res) => {
        this.setState({ users: res.data });
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.handleDelete(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Users;
