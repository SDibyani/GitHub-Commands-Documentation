import React from 'react'
import { useState } from "react";

import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold text-black text-center mb-4">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-sm text-black font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 bg-gray-100 border border-gray-400 text-black rounded 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-black font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 bg-gray-100 border border-gray-400 text-black rounded 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
      
    </>
  )
}

export default App
