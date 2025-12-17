import { Routes, Route, Link } from "react-router-dom";
import { Signup, Login } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <Link to="/login" className="font-bold">
          MyBlog
        </Link>
        {/* <div className="space-x-4">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div> */}
      </nav>
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
