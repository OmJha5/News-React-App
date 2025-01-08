import './App.css';
import React, { Component , useState } from 'react'
import Navbar from "./components/Navbar.js"
import News from "./components/News.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export default function App(){
  let apiKey = process.env.REACT_APP_NEWS_API_KEY
  let [progress, setProgress] = useState(0)

  return (
        <Router>

          <Navbar/>

          <LoadingBar
          color="#f11946"
          progress={progress}
          height={1}
          />

          <Routes>
              <Route path='/general' element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={12} category='general' />}></Route>
              <Route path='/' element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={12} category='general' />}></Route>
              <Route path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key='business' pageSize={12} category='business' />}></Route>
              <Route path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key='entertainment' pageSize={12} category='entertainment' />}></Route>
              <Route path='/health' element={<News apiKey={apiKey} setProgress={setProgress} key='health' pageSize={12} category='health' />}></Route>
              <Route path='/science' element={<News apiKey={apiKey} setProgress={setProgress} key='science' pageSize={12} category='science' />}></Route>
              <Route path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} key='sports' pageSize={12} category='sports' />}></Route>
              <Route path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} key='technology' pageSize={12} category='technology' />}></Route>
          </Routes>

        </Router>
        
    )
}