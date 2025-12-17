import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Please enter your details
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="name@company.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full py-3 mt-4 font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200">
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          New here? {/* Using Link instead of <a> */}
          <Link
            to="/signup"
            className="font-bold text-blue-600 hover:text-blue-500 transition-colors"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
