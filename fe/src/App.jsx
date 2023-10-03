import {BrowserRouter as Router} from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='app'>
        <h1>React on Rails Blog</h1>
        <p>Find this application layout in fe/src/App.jsx</p>
        <Navbar/>
        <AppRoutes/>
      </div>
    </Router>
  )
}

export default App
