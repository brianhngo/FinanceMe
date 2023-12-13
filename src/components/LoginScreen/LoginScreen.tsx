import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig.js';

export default function LoginScreen(): React.FC {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // error message when login attempt fails
  const [errorMessage, setErrorMessage] = useState(false);

  // Password visibility
  const [showPassword1, setShowPassword1] = useState<boolean>(false);

  const togglePassword1 = (): void => {
    setShowPassword1(!showPassword1);
  };

  // Email & Password onChange Handler

  const emailHandler = (event: MouseEvent): void => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event: MouseEvent): void => {
    setPassword(event.target.value);
  };

  // Sign In Handler
  const handleSignIn = async (e: MouseEvent): Promise<void> => {
    try {
      const isSuccessful = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (isSuccessful) {
        navigate('/dashboard');
      }
    } catch (error) {
      setErrorMessage(true);
      setEmail('');
      setPassword('');
    }
  };

  // Google Login Handler
  const handleGoogle = async (e): Promise<void> => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    try {
      const isSuccessful = await signInWithPopup(auth, provider);
      if (isSuccessful) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error Signing in with Google');
      setErrorMessage(true);
      setEmail('');
      setPassword('');
    }
  };

  useEffect(() => {
    // Check if the user is already signed in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/dashboard');
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  return (
    <section className="h-screen w-screen md:h-full flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      {/* Login Container */}
      <div className="flex flex-col items-center md:w-[40%] justify-center align-middle px-6 py-8  md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Welcome Back
            </h1>
            <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
              Sign in to your account
            </h1>
            {errorMessage ? (
              <p className="w-full text-lg text-red-500">
                {' '}
                Failed Attempt to Login! Incorrect Information{' '}
              </p>
            ) : null}
            {/* Form Container */}
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={emailHandler}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword1 === true ? 'text' : 'password'}
                    name="password"
                    id="password"
                    value={password}
                    onChange={passwordHandler}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <svg
                    onClick={togglePassword1}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={showPassword1 ? '#555' : 'currentColor'}
                    className="bi bi-eye-slash cursor-pointer ml-1"
                    viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                  </svg>
                </div>
              </div>
              {/* CheckBox row container */}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium  text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                onClick={handleSignIn}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign in
              </button>
              <button
                onClick={handleGoogle}
                type="button"
                className="text-white w-full  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-blue-800 mr-2 mb-2">
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512">
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                Sign in with Google<div></div>
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <a
                  onClick={() => navigate('/createaccount')}
                  className="font-medium text-blue-600 hover:underline cursor-pointer">
                  Sign up
                </a>
              </p>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Want to go back to home page?{' '}
                <a
                  onClick={() => navigate('/')}
                  className="font-medium text-blue-600 hover:underline cursor-pointer">
                  Back to Home Page
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
