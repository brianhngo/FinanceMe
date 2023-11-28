import React from 'react';
import StarRatings from 'react-star-ratings';

export default function Reviews(): React.FC {
  return (
    <section className=" w-[100%] min-w-screen bg-gray-300  pt-5 pb-5">
      {/* <!-- Heading --> */}
      <div className="w-full mx-auto px-2 text-center">
        <h1 className=" text-center max-w-[100%] mb-4 pt-4 text-6xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-6.75xl dark:text-black">
          {' '}
          Reviews{' '}
        </h1>

        <p className="mt-1 mb-4 inline-flex items-center justify-center px-5 py-3 mr-3 md:text-md xl:text-xl text-lg font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Dive into the rave reviews others have left, celebrating the
          unbeatable experience they've had with us
        </p>
      </div>
      <div className=" w-[90%]  mx-auto gap-[20px] grid grid-cols-1 md:grid-cols-3 justify-center align-middle pb-[10px]  ">
        <div className="max-w-3xl  mt-10" data-aos="zoom-y-out">
          <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
            {/* Testimonial */}
            <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
              <div className="w-32 h-32 mb-10 justify-center align-middle mx-auto overflow-hidden rounded-full">
                <img
                  src="/images/MaleProfileIcon2.png"
                  alt="Male Profile Icon 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <StarRatings
                rating={5}
                starRatedColor="yellow"
                numberOfStars={5}
                name="rating1"
              />
              {/* Review */}
              <blockquote className="text-xl mt-[15px] font-medium mb-4">
                "I've tried numerous finance apps, but yours stands out! The
                user-friendly interface makes budgeting a breeze. It's like
                having a personal financial advisor in my pocket. Highly
                recommended!"
              </blockquote>

              {/* Name */}
              <cite className="block font-bold text-xl not-italic mb-1">
                Robert Smith
              </cite>
              {/* Occupation */}
              <div className="text-gray-600 text-lg">
                <span> Data Analysis </span>{' '}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl  mt-10" data-aos="zoom-y-out">
          <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
            {/* Testimonial */}
            <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
              <div className="w-32 h-32 mb-10 justify-center align-middle mx-auto overflow-hidden rounded-full">
                <img
                  src="/images/MaleProfileIcon.png"
                  alt="Male Profile Icon 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <StarRatings
                rating={5}
                starRatedColor="yellow"
                numberOfStars={5}
                name="rating1"
              />
              {/* Review */}
              <blockquote className="text-xl mt-[15px] font-medium mb-4">
                "Your app has transformed the way I manage my money. The
                detailed insights and charts are a game-changer. A slight
                learning curve, but once mastered, it's an indispensable tool.
              </blockquote>
              {/* Name */}
              <cite className="block font-bold text-xl not-italic mb-1">
                John Doe
              </cite>
              {/* Occupation */}
              <div className="text-gray-600 text-lg">
                <span>FullStack Developer</span>{' '}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl  mt-10" data-aos="zoom-y-out">
          <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
            {/* Testimonial */}
            <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
              <div className="w-32 h-32 mb-10 justify-center align-middle mx-auto overflow-hidden rounded-full">
                <img
                  src="/images/FemaleProfileIcon.png"
                  alt="Male Profile Icon 2"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Review */}
              <StarRatings
                rating={5}
                starRatedColor="yellow"
                numberOfStars={5}
                name="rating1"
              />
              <blockquote className="text-xl mt-[15px] font-medium mb-4">
                "I never thought budgeting could be this enjoyable! Your app's
                sleek design and intuitive features make tracking expenses a
                delight. Kudos to the developers and team! "
              </blockquote>
              {/* Name */}
              <cite className="block font-bold text-xl not-italic mb-1">
                Mary Jane
              </cite>
              {/* Occupation */}
              <div className="text-gray-600 text-lg">
                <span> Accountant</span>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
