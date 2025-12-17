import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Join MyBlog</h2>
          <p className="mt-2 text-sm text-gray-500">Start your journey today</p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
          />
          <input
            type="password"
            placeholder="Create Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
          />
          <button className="w-full py-3 font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200">
            Register Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-bold text-blue-600 hover:text-blue-500 transition-colors"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
