import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Header from "./components/Header/Header";

const Allroutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </Router>
  );
};

export default Allroutes;
