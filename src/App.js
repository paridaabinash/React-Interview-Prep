import React, { Fragment } from 'react'
import Header from "./Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Student from "./Student";
import Parent from './qus-4/Parent';
import './App.css';

export default function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </Router>
     <Parent/>

    </Fragment>
  );
}
