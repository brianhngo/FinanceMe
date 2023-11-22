import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig.js';
import { useNavigate } from 'react-router-dom';
import PasswordStrengthMeter from './PasswordStrengthMeter.js';

export default function CreateNewUser(): React.FC {
  // State variables for managing email, password, and error messages
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');

  // General Error message
  const [createUserStatus, setCreateUserStatus] = useState<boolean>(false);

  // Show Password. Change type from password to text
  const [showPassword1, setShowPassword1] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);

  const togglePassword1 = (): void => {
    setShowPassword1(!showPassword1);
  };

  const togglePassword2 = (): void => {
    setShowPassword2(!showPassword2);
  };

  // Doesn't meet requirements length
  const [errorMessage1, setErrorMessage1] = useState<boolean>(false);

  // Password1 !== Password 2
  const [errorMessage2, setErrorMessage2] = useState<boolean>(false);

  // email already exists
  const [errorMessage3, setErrorMessage3] = useState<boolean>(false);

  // Access the navigation function from react-router-dom
  const navigate = useNavigate();

  // Event handlers for updating state based on user input
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const passwordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const password2Handler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword2(event.target.value);
  };

  // Handler for creating a new user account
  const createAccountHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    try {
      // Passwords User has entered does not match
      if (password !== password2) {
        setCreateUserStatus(true);
        setErrorMessage2(true);
        setErrorMessage1(false);
        setErrorMessage3(false);
        setEmail('');
        setPassword('');
        setPassword2('');
        return;
      }
      // Since P1 === P2, we just check if it meets criteria length > 5
      if (password.length < 6) {
        setCreateUserStatus(true);
        setErrorMessage1(true);
        setErrorMessage2(false);
        setErrorMessage3(false);
        setEmail('');
        setPassword('');
        setPassword2('');
        return;
      }

      // Assuming createUserWithEmailAndPassword is a function that creates a user
      const isSuccessful = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (isSuccessful) {
        navigate('/dashboard');
      }
    } catch (error) {
      setCreateUserStatus(true);
      setErrorMessage3(true);
      setErrorMessage1(false);
      setErrorMessage2(false);
      setEmail('');
      setPassword('');
      setPassword2('');
    }
  };

  return (
    <section className="h-screen w-screen md:h-full flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      {/* Login Container */}
      <div className="flex flex-col items-center md:w-[40%] justify-center px-6 py-8  md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Create New Account
            </h1>
            {/* Error Messages to indicate to the user what errorred occurred */}
            {createUserStatus ? (
              <p className="w-full text-lg text-red-500">
                {' '}
                Error! Failed Attempt to Create Account{' '}
              </p>
            ) : null}
            {errorMessage1 ? (
              <p className="w-full text-md text-red-500">
                {' '}
                The password you have typed does not meet the criteria
              </p>
            ) : null}
            {errorMessage2 ? (
              <p className="w-full text-md text-red-500">
                {' '}
                The passwords do not match. Please Try Again
              </p>
            ) : null}
            {errorMessage3 === true ? (
              <p className="w-full text-md text-red-500">
                {' '}
                The following email already exists.
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
                  onChange={emailHandler}
                  value={email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword1 === false ? 'text' : 'password'}
                    name="password"
                    id="password"
                    onChange={passwordHandler}
                    value={password}
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

                <label
                  htmlFor="password2"
                  className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Re-Enter Password
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword2 === false ? 'password' : 'text'}
                    name="password2"
                    id="password2"
                    onChange={password2Handler}
                    value={password2}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <svg
                    onClick={togglePassword2}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={showPassword2 ? '#555' : 'currentColor'}
                    className="bi bi-eye-slash cursor-pointer ml-1"
                    viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                  </svg>
                </div>
                <PasswordStrengthMeter password={password} />
                <p className="w-full text-md text-red-500">
                  Password must be a minimum of 6 characters
                </p>
              </div>
              {/* CheckBox row container */}

              <button
                onClick={createAccountHandler}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Create Account
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Want to go back to Login?{' '}
                <a
                  onClick={() => navigate('/login')}
                  href="#"
                  className="font-medium text-blue-600 hover:underline">
                  Back to Login
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
