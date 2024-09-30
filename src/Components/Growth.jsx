import React from "react";

function Growth(props) {
  return (
    
      <li>
        <div className="flex-start md:flex flex border-l-2 border-solid border-red-400">
          <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-blue-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-10 sm:w-[400px] w-[300px] ml-6 block max-w-md rounded-lg bg-gray-100 p-6 shadow-md ">
            <div className="mb-4 flex justify-between">
              <p className="text-xl font-medium	 text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                {props.year}
              </p>
            </div>
            <p className="mb-6 text-neutral-700 dark:text-neutral-700">
              {props.content}
            </p>
          </div>
        </div>
      </li>
    
  );
}

export default Growth;
