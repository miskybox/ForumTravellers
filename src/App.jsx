//App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Layout from "./components/Layout";
import Forum from "./components/Forum";
import CategoryComponent from "../src/pages/Categories";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Gallery from "./components/Gallery";
import AllEntries from "./pages/AllEntries";
import MyEntries from "./pages/MyEntries";
import BlogPost from "./pages/BlogPost";
import UserProfile from "./pages/UserProfile";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  const [categories, setCategories] = useState([
    { id: 1, name: "General", posts: 5, following: false, followers: 0 },
    { id: 2, name: "Europe", posts: 5, following: false, followers: 0 },
    { id: 3, name: "America", posts: 4, following: false, followers: 0 },
    { id: 4, name: "Asia", posts: 4, following: false, followers: 0 },
    { id: 5, name: "Africa", posts: 5, following: false, followers: 0 },
    { id: 6, name: "Oceania", posts: 4, following: false, followers: 0 },
  ]);

 
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Forum categories={categories} setCategories={setCategories} />
              }
            />
            <Route
              path="forum"
              element={
                <Forum categories={categories} setCategories={setCategories} />
              }
            />
            <Route
              path="forum/:id"
              element={<CategoryComponent categories={categories} />}
            />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="all-entries" element={<AllEntries />} />
            <Route element={<ProtectedRoute />}>
              <Route path="my-entries" element={<MyEntries />} />
              <Route path="profile/:username" element={<UserProfile />} /> 
            </Route>
            <Route path="blog/:postId" element={<BlogPost />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;