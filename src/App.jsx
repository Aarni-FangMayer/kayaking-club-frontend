import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "./pages/Account"
import Admin from "./pages/Admin";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/account" element={<Account />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
