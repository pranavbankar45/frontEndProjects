import React from "react";

function Card({userName}) {
  return (
    <div className="max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg h-100 m-10"
          src="https://images.pexels.com/photos/33005213/pexels-photo-33005213.jpeg"
          alt="Card image"
        />
      </a>
      <div className="p-5">
        <a href="#">
            <h1 className="text-orange-300 text-bolt m-5">{userName}</h1>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
       <a
  href="#"
  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 
             bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none 
             focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
>
  Read more
  <svg
    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg>
</a>

      </div>
    </div>
  );
}

export default Card;
