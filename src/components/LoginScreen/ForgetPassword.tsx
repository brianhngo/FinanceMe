import React, { useState } from 'react';
import { auth } from '../../../firebase/firebaseConfig.js';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');

  // Event handlers for updating state based on user input
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const createAccountHandler = async () => {
    try {
      const status = await sendPasswordResetEmail(auth, email);
      navigate('/forgetpasswordnext');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="h-screen w-screen md:h-full flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      {/* Login Container */}
      <div className="flex flex-col items-center md:w-[40%] justify-center px-6 py-8  md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Forget Password?
            </h1>

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

              <button
                onClick={createAccountHandler}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Forget Password
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
