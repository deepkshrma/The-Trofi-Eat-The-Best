import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RoleList from "./Pages/Role/RoleLIst";

const Allroutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/RoleList" element={<RoleList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Allroutes;
