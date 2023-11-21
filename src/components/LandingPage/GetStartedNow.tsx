import React from 'react';

export default function GetStartedNow(): React.FC {
  return (
    <section className="bg-pink-300 pt-[10%] pb-[10%]">
      <div className="mx-auto text-center w-full flex flex-col justify-center align-middle">
        <img src="" alt="Company Logo" />
        <h1 className="text-center max-w-[100%] mb-4 pt-4 text-4xl font-extrabold tracking-tight leading-none md:text-9xl xl:text-6.75xl dark:text-black">
          Get Started Now
        </h1>
        <p className='className="mt-1 mb-4 inline-flex items-center justify-center px-5 py-3 mr-3 md:text-md xl:text-2xl text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'>
          {' '}
          Be part of the millions people around the world using FinanceMe
        </p>
        <div className=" w-full flex mx-auto gap-[25px] justify-center align-middle">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {' '}
            Create Account{' '}
          </button>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {' '}
            Login{' '}
          </button>
        </div>
      </div>
    </section>
  );
}
