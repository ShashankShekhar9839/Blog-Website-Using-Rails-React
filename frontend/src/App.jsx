import { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { Signup, Login } from "./components";
import Home from "./pages/home/Home";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user, logout, loading } = useAuth();

  // IMPORTANT: Don't calculate routes while context is still loading
  if (loading) {
    return <div className="flex justify-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <Link to="/" className="font-bold">
          MyBlog
        </Link>
        {user && (
          <div className="flex items-center gap-4">
            <span>Hi, {user.username}</span>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </div>
        )}
      </nav>

      <div className="container mx-auto p-6">
        <Routes>
          {/* Option A: Define /home specifically */}
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/login" />}
          />

          {/* Option B: Redirect root to /home */}
          <Route
            path="/"
            element={<Navigate to={user ? "/home" : "/login"} />}
          />

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/home" />}
          />

          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/home" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
