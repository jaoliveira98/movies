import React from "react";

function Content() {
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="p-8 rounded sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox
                <br className="hidden md:block" />
                jumps over a{" "}
                <span className="relative inline-block text-amber-500">
                  lazy dog{" "}
                  <div className="w-full h-3 -mt-3 bg-deep-purple-accent-400" />
                </span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo. Sed ut perspiciatis unde omnis.
              </p>
              <button
                type="submit"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
