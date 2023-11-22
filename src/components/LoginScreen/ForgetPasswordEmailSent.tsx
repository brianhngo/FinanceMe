import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgetPasswordEmailSent() {
  const navigate = useNavigate();
  return (
    <section className="h-screen w-screen md:h-full flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      {/* Login Container */}
      <div className="flex flex-col items-center md:w-[40%] justify-center px-6 py-8  md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
              We've just dispatched an email to the provided address. Kindly
              check your inbox for further instructions on resetting your
              password.
            </h1>

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
          </div>
        </div>
      </div>
    </section>
  );
}
