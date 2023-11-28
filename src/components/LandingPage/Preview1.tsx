import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Preview1(): React.FC {
  const navigate = useNavigate();
  return (
    <section className=" w-[100%] min-w-screen bg-pink-100  mt-5 lg:mt-10">
      {/* <!-- Heading --> */}
      <div className="w-full mx-auto px-2 text-center">
        <h1 className=" text-center max-w-[100%] mb-4 pt-4 text-4xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-6.75xl dark:text-black">
          {' '}
          Exclusive Sneak Peek #2{' '}
        </h1>
        <p className="mt-1 md:mb-4 inline-flex items-center justify-center px-5 py-3 mr-3 md:text-md text-xl font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Get an Exclusive Preview: Dive into the second sneak peek, offering an
          inside look at our app's features and interface in action.
        </p>
      </div>
      {/* <!-- Feature #1 --> */}
      <div className=" w-full flex flex-row justify-center align-middle mt-20 lg:mt-16">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          {/* <!-- Content --> */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="mt-1 mb-4 inline-flex items-center justify-center text-center text-2xl   py-3 mr-3 md:text-md xl:text-5xl  font-medium  text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Establish Goal-Oriented Finances
            </h1>
            <p className="text-bookmark-grey text-md xl:text-md my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Embark on a personalized financial journey and unveil robust
              features that intricately map and guide you towards achieving your
              unique financial milestones with ease.
            </p>
            <button
              onClick={() => navigate('/createaccount')}
              type="button"
              className=" ml-auto mx-auto text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-xl rounded-lg text-xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Join Now
            </button>
          </div>
          {/* <!-- Image --> */}
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="/images/budgeting.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
