import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Router } from "@reach/router";
import HomeMain from "./components/HomeMain";
import Footer from "./components/Footer";
import AllStudents from "./components/AllStudents";
import Block from "./components/Block";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <HomeMain path="/" />
        <AllStudents path="/students" />
        <Block path="/students/block" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
