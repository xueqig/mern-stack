import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './components/users';
import Movies from './components/movies';
import NavBar from './components/navBar';
import UserForm from './components/userForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserForm />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
