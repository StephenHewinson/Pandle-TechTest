import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />         
        </header>
        <Routes>
          <Route path='/' element={<div>Home</div>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
