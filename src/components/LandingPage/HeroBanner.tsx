import React from 'react';

export default function HeroBanner(): React.FC {
  return (
    // Parent Container
    <section className="w-full min-w-100% mt-[68px] p-[150px] bg-pink-300">
      {/* Child Container */}
      <div className="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* Description Container */}
        <div className="mr-auto place-self-center lg:col-span-6 lg:text-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-6.75xl dark:text-white">
            Empower Your Wealth with Precision
          </h1>
          <p className="mt-1 mb-4 inline-flex items-center justify-center px-5 py-3 mr-3 md:text-md xl:text-lg text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Effortlessly manage finances, track expenses, set budgets, and
            achieve financial goals with our intuitive app. Your journey to
            financial success starts here!
          </p>
          <a
            href="#"
            className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 md:text-md xl:text-lg focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Speak to Sales
          </a>
        </div>
        {/* Image Container */}
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
          <img
            src="/images/HeroBannerImage.png"
            alt="Hero Banner Image"
            className="w-full h-auto max-h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
