"use client";

import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/firebaseClient";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import Loader from "app/components/Loader";

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkForRedirectResult = async () => {
      try {
        const result: any = await getRedirectResult(auth);
        if (result.user) {
          setIsRedirecting(true);
          router.push("/");
        }
        setLoading(false);
      } catch (error) {
        setError("Error during Google Authentication");
      }
    };

    checkForRedirectResult();
  }, [router]);

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      console.log(error);
      setError("Error creating user");
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
      setLoading(false);
    } catch (error) {
      console.log(error);
      router.push("/signup");
      setError("Error during Google Authentication");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {isRedirecting ? ( // Check if isRedirecting is true
        <div className="flex flex-col items-center">
          <p className="text-2xl mb-4">Loading...</p>
        </div>
      ) : loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
            {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}
            <form onSubmit={handleEmailSignup} className="space-y-4">
              <div>
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block font-medium mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-4 text-center">
              <button
                onClick={handleGoogleSignup}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign up with Google
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SignupPage;