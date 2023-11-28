import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroBanner(): React.FC {
  const navigate = useNavigate();
  return (
    <section className="w-full  mt-[150px] md:mt-[68px] md:p-[150px] p-[75px] bg-pink-300">
      {/* Container */}
      <div className="max-w-screen-xl align-middle justify-center mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Image Container */}
        <div className="flex w-[200px] flex-col justify-center items-center md:w-[65%] mx-auto md:p-[40px] mb-8 md:mb-0">
          <img
            src="/images/HeroBannerImage.png"
            alt="Hero Banner Image"
            className=" h-auto md:max-h-[500px] mx-auto object-cover"
          />
        </div>
        {/* Description Container */}
        <div className="flex mx-auto flex-col align-middle justify-center text-center md:text-left md:w-[45%]">
          <h1 className="max-w-2xl text-center mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-6.75xl dark:text-white">
            Empower Your Wealth with Precision
          </h1>
          <p className="mb-4 text-lg text-white">
            Effortlessly manage finances, track expenses, set budgets, and
            achieve financial goals with our intuitive app. Your journey to
            financial success starts here!
          </p>
          <a
            onClick={() => navigate('/login')}
            href="#"
            className="text-white md:w-[40%] text-center mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 text-md xl:text-lg focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-3 inline-block dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Speak to Sales
          </a>
        </div>
      </div>
    </section>
  );
}
