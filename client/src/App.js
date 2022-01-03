import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './components/users';
import Movies from './components/movies';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
