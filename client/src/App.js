import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './components/users';
import Movies from './components/movies';
import NavBar from './components/navBar';
import AddUser from './components/addUser';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="/users" element={<Users />} />
            <Route path="/addUser" element={<AddUser />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
