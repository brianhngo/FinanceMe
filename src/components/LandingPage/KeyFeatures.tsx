import React from 'react';

export default function KeyFeatures(): React.FC {
  return (
    <section
      id="key-features"
      className="bg-gray-300 w-[100%] pb-[15px] min-w-screen">
      <div className="text-center">
        <h1 className=" text-center max-w-[100%] mb-4 pt-4 text-4xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-6.75xl dark:text-white">
          {' '}
          Key Features{' '}
        </h1>
        <p className="mt-1 mb-4 inline-flex items-center justify-center px-5 py-3 mr-3 md:text-md xl:text-xl text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Elevate your financial well-being with our app's seamless budgeting,
          automated expense tracking, and personalized goal management features{' '}
        </p>
        {/* Key Features Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[10px] marker:md:pb-[40px] pt-[40px] w-[90%] mx-auto">
          <div className="flex w-[80%] justify-center p-5 mx-auto flex-col border rounded-xl bg-white shadow-md border-gray-200 hover:shadow-lg hover:transform hover:translate-y-[-10px] transition-transform duration-300 ease-in-out">
            <img
              className="w-[300px] h-[300px] mx-auto"
              src="/images/budgeting.png"
            />
            <h3 className="text-center max-w-[100%] mb-4 pt-4 text-2xl  tracking-tight leading-none md:text-4xl  dark:text-black">
              {' '}
              Easy Budgeting
            </h3>
            <p className="mt-1 mb-4 inline-flex items-center justify-center px-5 py-3 mr-3 md:text-xl  text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              {' '}
              Effortlessly manage your money with a user-friendly budgeting tool{' '}
            </p>
          </div>
          <div className="flex w-[80%] justify-center p-5 mx-auto flex-col border rounded-xl bg-white shadow-md border-gray-200 hover:shadow-lg hover:transform hover:translate-y-[-10px] transition-transform duration-300 ease-in-out">
            <img
              className="w-[300px] h-[300px] mx-auto"
              src="/images/TrackingFinance.png"
            />
            <h3 className="text-center max-w-[100%] mb-4 pt-4 text-2xl  tracking-tight leading-none md:text-4xl  dark:text-black">
              {' '}
              Automatic Tracking{' '}
            </h3>
            <p className="mt-1 mb-4 inline-flex items-center justify-center px-5 py-3 mr-3 md:text-xl  text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              {' '}
              Track spending effortlessly with automated categorization{' '}
            </p>
          </div>
          <div className="flex w-[80%] justify-center p-5 mx-auto flex-col border rounded-xl bg-white shadow-md border-gray-200 hover:shadow-lg hover:transform hover:translate-y-[-10px] transition-transform duration-300 ease-in-out">
            <img
              className="w-[300px] h-[300px] mx-auto"
              src="/images/GoalSaving.png"
            />
            <h3 className="text-center max-w-[100%] mb-4 pt-4 text-2xl  tracking-tight leading-none md:text-4xl  dark:text-black">
              {' '}
              Goal Savings{' '}
            </h3>
            <p className="mt-1 mb-4 inline-flex items-center justify-center px-5 py-3 mr-3 md:text-xl  text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              {' '}
              Achieve financial goals by setting and reaching personalized
              savings target
            </p>
          </div>
          <div className="flex w-[80%] justify-center p-5 mx-auto flex-col border rounded-xl bg-white shadow-md border-gray-200 hover:shadow-lg hover:transform hover:translate-y-[-10px] transition-transform duration-300 ease-in-out">
            <img
              className="w-[300px] h-[300px] mx-auto"
              src="/images/FinancialOverview1.png"
            />
            <h3 className="text-center max-w-[100%] mb-4 pt-4 text-2xl  tracking-tight leading-none md:text-4xl  dark:text-black">
              {' '}
              Clear Overview{' '}
            </h3>
            <p className="mt-1 mb-4 inline-flex items-center justify-center px-5 py-3 mr-3 md:text-xl  text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              {' '}
              Gain a simple, clear view of your finances with straightforward
              insight{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
