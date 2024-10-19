import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe';


function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
    </div>
  )
}

export default App
