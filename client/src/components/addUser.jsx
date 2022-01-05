import React, { Component } from 'react';
import Axios from 'axios';

class AddUser extends Component {
  state = {
    data: { name: '', email: '', age: '', password: '' },
  };

  handleLogin = async (event) => {
    event.preventDefault();
    Axios.post('http://localhost:5000/users', this.state.data).then((res) =>
      console.log(res),
    );
  };

  handleChange = (event) => {
    const data = { ...this.state.data };
    data[event.target.id] = event.target.value;
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <form onSubmit={this.handleLogin}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={data.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={data.age}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={data.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={data.password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default AddUser;
