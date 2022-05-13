import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import DataFetch from "./components/DataFetch";
import Navbar from "./components/Navbar";
import DarkHero from "./components/DarkHero";
import Content from "./components/Content";
import StaticData from "./components/StaticData";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://retoolapi.dev/zeQpfB/data")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gray-900">
      <Navbar />
      <DarkHero />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-52">
        <div className="grid grid-cols-2">
          <h2 class="mb-6 font-sans text-3xl font-thin text-amber-500	tracking-tight sm:text-4xl sm:leading-none">
            | <span className="text-white font-bold">Top movies </span> this
            week
          </h2>
          <a className="text-white text-right">See more</a>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {posts.slice(0, 3).map((a) => {
            return <DataFetch post={a} />;
          })}
        </div>
      </div>
      <Content />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2">
          <h2 class="mb-6 font-sans text-3xl font-thin text-amber-500	tracking-tight sm:text-4xl sm:leading-none">
            | <span className="text-white font-bold">Top TV series </span> this
            week
          </h2>
          <a className="text-white text-right">See more</a>
        </div>
        <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {posts.slice(0, 4).map((a) => {
            return <DataFetch post={a} />;
          })}
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2">
          <h2 class="mb-6 font-sans text-3xl font-thin text-amber-500	tracking-tight sm:text-4xl sm:leading-none">
            | <span className="text-white font-bold">Top documentaries </span>{" "}
            this week
          </h2>
          <a className="text-white text-right">See more</a>
        </div>
        <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {posts.slice(0, 4).map((a) => {
            return <DataFetch post={a} />;
          })}
        </div>
      </div>
      <StaticData />
    </div>
  );
}

export default App;
