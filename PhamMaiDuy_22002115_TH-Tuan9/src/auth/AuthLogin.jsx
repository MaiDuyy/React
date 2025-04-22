import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, setUserInfo } from "./authSlice.js";
function AuthLogin() {

    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (username && email) {
        dispatch(login({ username, email }));
        setUsername("");
        setEmail("");
      }
    };
  
    const handleLogout = () => {
      dispatch(logout());
    };
  
    const handleUpdateUserInfo = () => {
      dispatch(setUserInfo({ email: "newemail@example.com" }));
    };
  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {!isLoggedIn ? (
          <>
            <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block mb-1">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Login
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center mb-6">Welcome, {user.username}!</h1>
            <div className="text-center mb-4">
              <p className="text-gray-700">Email: {user.email}</p>
            </div>
            <div className="flex flex-col space-y-3">
              <button
                onClick={handleUpdateUserInfo}
                className="w-full py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
              >
                Update Email
              </button>
              <button
                onClick={handleLogout}
                className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


export default AuthLogin