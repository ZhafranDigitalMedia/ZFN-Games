import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import Detail from "./Detail";
import { Link } from "react-router-dom";

const Itemgamas = () => {
  const [games, setGames] = useState([]);

  const getgame = () => {
    axios
      .get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
        },
      })
      .then((res) => {
        setGames(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  useEffect(() => {
    getgame();
  }, []);
  function truncateString(str, num) {
    if (num > str.length) {
      return str;
    } else {
      str = str.substring(0, num);
      return str + "...";
    }
  }
  return (
    <section id="games">
      <div className="bg-items flex items-center flex-col p-32">
        <h2 className="text-white font-semibold text-4xl">This Games</h2>

        <div className="m-10 p-5 w-full h-full rounded-md flex flex-wrap gap-8 justify-center items-center">
          {games?.slice(0, 48).map((game) => (
            <>
              <div className="menu-card border bg-white w-1/4 h-auto rounded-lg max-lg:text-xs max-lg:w-full overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <img
                  className="object-cover rounded-t-lg"
                  src={game.thumbnail}
                  alt="Ini gambar game"
                />
                <div className="py-4 px-2 flex flex-col text-black">
                  <h2 className="text-xl font-semibold ">
                    {truncateString(game.title, 20)}
                  </h2>
                  <h2 className="text-xs mt-1">
                    short description : {game.short_description}
                  </h2>
                  <h2 className="text-xs mt-1">
                    release : {game.release_date}
                  </h2>
                  <h2 className="text-xs mt-1">developer : {game.developer}</h2>
                  {/* <button>{game.id}</button> */}
                  {/* <a href={game.game_url} class="text-xs mt-1 decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out">game url</a> */}
                  <Link to={`game/${game.id}`}>
                    <div class="flex justify-center space-x-2">
                      <button
                        type="button"
                        data-bs-target="#detail"
                        onClick={(e) => getgame(game.id)}
                        value={Detail}
                        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      >
                        Detail
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itemgamas;
