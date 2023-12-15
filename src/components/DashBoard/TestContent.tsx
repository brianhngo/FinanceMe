import React, { useState } from 'react';

export default function TestContent() {
  const [category, setCategory] = useState('');
  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };
  return (
    <section className="ml-5 mr-5 mt-5 mb-5 w-90 h-[90%]">
      <a
        href="#"
        className="block w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform transform-gpu hover:-translate-y-2">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          Category Spending Trends
        </h5>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="countries"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-500">
            Pick a Category and Timeline You would want to see
          </label>
          <select
            id="countries"
            className="bg-transparent mb-5 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={categoryHandler}>
            <option disabled selected>
              Choose a category
            </option>
            <option value="Loans">Loans</option>
            <option value="Utilities">Utilities</option>
            <option value="Clothing">Clothing</option>
            <option value="Rent">Rent</option>
            <option value="Groceries">Groceries</option>
            <option value="Transportation">Transportation</option>
            <option value="Health">Health</option>
            <option value="Gas">Gas</option>
            <option value="Savings">Savings</option>
            <option value="Activities">Activities</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </a>
    </section>
  );
}
