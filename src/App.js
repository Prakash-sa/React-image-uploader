import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ResultImageCard } from './components/ResultImageCard';
import { ResultImageCards } from './components/ResultImageCards';
import Navbar  from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About'
import Dropzone_test from './components/Dropzone_test'


// best article https://blog.logrocket.com/create-drag-and-drop-component-react-dropzone/
// https://www.upbeatcode.com/react/where-to-store-images-in-react-app/


function App() {


  return (
    <div className="App">
      <Router>
        <Navbar/ >
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/dropzone" element={<Dropzone_test/>}/>
          <Route path="/" element={<Home/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;