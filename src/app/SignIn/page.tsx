"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For redirection after sign-in

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Allow any credentials for login
    router.push("/"); // Redirect to home page on successful login
  };

  // Handle Google Sign-In
  const handleGoogleLogin = (response: any) => {
    if (response.profileObj) {
      // On successful Google login, redirect to home page
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-[Clash Display] bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        {/* Login Heading */}
        <h2 className="text-2xl font-thin text-center mb-4">Login</h2>

        {/* Gray Line */}
        <div className="border-t border-gray-300 mb-4"></div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#2A254B]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#2A254B]">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-[#2A254B] hover:underline">Forgot your password?</a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#2A254B] text-white py-2 rounded-md hover:bg-[#2A254B] transition duration-200"
          >
            Sign In
          </button>
        </form>
        
        {/* New Customer Section */}
        <div className="text-center">
          <p className="text-sm text-gray-700">
            New customer?{" "}
            <a href="/signup" className="text-[#2A254B] hover:underline">Create your account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
