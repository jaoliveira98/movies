import React from "react";

function DataFetch({ post }) {
  return (
    <div key={post.id} className="">
      <div className="">
        <div className="overflow-hidden transition-shadow duration-300">
          <img
            src="https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-white hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                {post.rating}
              </a>
              <span className="text-gray-500"> /10</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title={post.title}
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-white"
            >
              {post.title}
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 float-right text-white"
            >
              Ver trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataFetch;
