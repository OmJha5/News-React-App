import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar.js"
import News from "./components/News.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API_KEY

  state = {
    progress : 0,
  }

  setProgress = (progress) => {
    this.setState({progress : progress})
  }

  render() {
    return (
        <Router>

          <Navbar/>

          <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          height={1}
          />

          <Routes>
              <Route path='/general' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='general' pageSize={12} category='general' />}></Route>
              <Route path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='business' pageSize={12} category='business' />}></Route>
              <Route path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='entertainment' pageSize={12} category='entertainment' />}></Route>
              <Route path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='health' pageSize={12} category='health' />}></Route>
              <Route path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='science' pageSize={12} category='science' />}></Route>
              <Route path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='sports' pageSize={12} category='sports' />}></Route>
              <Route path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='technology' pageSize={12} category='technology' />}></Route>
          </Routes>

        </Router>
        
    )
  }
}