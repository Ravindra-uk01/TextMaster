// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

function App() {
 
  return (
    <>
      <Navbar />
      <Alert />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
