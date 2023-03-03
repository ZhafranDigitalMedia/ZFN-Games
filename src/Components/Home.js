import React from "react";
import Header from "./Header";
import "./style.css";
import Videopng from "../picture/Forza 6.mp4";
import Itemgamas from "./Itemgamas";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import "aos/dist/aos.css";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="home">
        <div className="justify-center items-center flex flex-col">
          <video class="w-full" autoPlay muted loop>
            <source src={Videopng} type="video/mp4" />
          </video>
          {/* <div className="absolute text-center bg-blur">
          <h2 className="title -m-8">Welcome</h2>
          <h4 className="subtitle text-cyan-400 z-10">ZFN Games</h4>
          </div> */}
        </div>
      </section>
      <section id="category" className="px-16 py-5 bg-items">
        <h2 className="text-white font-semibold text-4xl text-center">Category Games</h2>

        <div className="flex flex-wrap justify-between py-8 gap-7">
          <Link to={`/category/shooter`}>
            <div className="w-80 h-28 bg-catl rounded-lg flex justify-center items-center overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-white font-bold text-xl">Shooter</h2>
            </div>
          </Link>
          <Link to={`/category/racing`}>
            <div className="w-80 h-28 bg-cat2 rounded-lg flex justify-center items-center overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-white font-bold text-xl">Racing</h2>
            </div>
          </Link>
          <Link to={`/category/strategy`}>
            <div className="w-80 h-28 bg-cat3 rounded-lg flex justify-center items-center overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-white font-bold text-xl">Strategy</h2>
            </div>
          </Link>
          <Link to={`/category/fighting`}>
            <div className="w-80 h-28 bg-cat4 rounded-lg flex justify-center items-center overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-white font-bold text-xl">Fighting</h2>
            </div>
          </Link>
          <Link to={`/category/action`}>
            <div className="w-80 h-28 bg-cat5 rounded-lg flex justify-center items-center overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-white font-bold text-xl">Action</h2>
            </div>
          </Link>
          <Link to={`/category/horror`}>
            <div className="w-80 h-28 bg-cat6 rounded-lg flex justify-center items-center overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-white font-bold text-xl">horror</h2>
            </div>
          </Link>
          <Link to={`/category/military`}>
            <div className="w-80 h-28 bg-cat7 rounded-lg flex justify-center items-center overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-white font-bold text-xl">military</h2>
            </div>
          </Link>
          <Link to={`/category/sports`}>
            <div className="w-80 h-28 bg-cat5 rounded-lg flex justify-center items-center overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-white font-bold text-xl">Sports</h2>
            </div>
          </Link>
          <Link to={`/category/social`}>
            <div className="w-80 h-28 bg-cat5 rounded-lg flex justify-center items-center overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-white font-bold text-xl">social</h2>
            </div>
          </Link>
          <Link to={`/category/survival`}>
            <div className="w-80 h-28 bg-cat5 rounded-lg flex justify-center items-center overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-white font-bold text-xl">survival</h2>
            </div>
          </Link>
          <Link to={`/category/tank`}>
            <div className="w-80 h-28 bg-cat5 rounded-lg flex justify-center items-center overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-white font-bold text-xl">tank</h2>
            </div>
          </Link>
          <Link to={`/category/flight`}>
            <div className="w-80 h-28 bg-cat5 rounded-lg flex justify-center items-center overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-white font-bold text-xl">flight</h2>
            </div>
          </Link>
        </div>
      </section>
      <Itemgamas />
      <Footer />
    </div>
  );
};

export default Home;
