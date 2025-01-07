import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar.js"
import News from "./components/News.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
        <Router>

          <Navbar/>

          <Routes>
              <Route path='/general' element={<News key='general' pageSize={12} category='general' />}></Route>
              <Route path='/business' element={<News key='business' pageSize={12} category='business' />}></Route>
              <Route path='/entertainment' element={<News key='entertainment' pageSize={12} category='entertainment' />}></Route>
              <Route path='/health' element={<News key='health' pageSize={12} category='health' />}></Route>
              <Route path='/science' element={<News key='science' pageSize={12} category='science' />}></Route>
              <Route path='/sports' element={<News key='sports' pageSize={12} category='sports' />}></Route>
              <Route path='/technology' element={<News key='technology' pageSize={12} category='technology' />}></Route>
          </Routes>

        </Router>
        
    )
  }
}