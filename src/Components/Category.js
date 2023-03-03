import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Dna } from "react-loader-spinner";

const Category = () => {
  const { games } = useParams();

  const [categorygames, setcategorygames] = useState([]);

  const [loading, setLoading] = useState(true);

  const Categorygame = async () => {
    axios
      .get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        params: { category: `${games}` },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
        },
      })
      // console.log(res.data.slice(0, 10))
      .then((res) => {
        setcategorygames(res.data);
      })
      .catch((res) => {
        console.log(res.data);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
    Categorygame();
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ZFN | {games}</title>
        <meta
          name="description"
          content={`Top games ${games} in Pc or desktop`}
        />
      </Helmet>
      {loading ? (
        <>
          <div className="flex flex-col h-screen justify-center items-center">
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
            <h2 className="font-semibold -m-5 textw">Loding category game {games}</h2>
          </div>
        </>
      ) : (
        <>
        <Header />
          <div className="bg-items flex items-center flex-col p-32">
            <h2 className="text-white font-semibold text-4xl text-center">
              Top games <span className="capitalize">{games}</span> in Pc or
              desktop
            </h2>
            <div className="m-10 p-14 w-full h-full rounded-md flex flex-wrap gap-8 justify-center items-center">
              {categorygames?.map((game) => (
                <>
                  <div className="menu-card border bg-white w-1/4 h-auto rounded-lg max-lg:text-xs max-lg:w-full overflow-hidden transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <img
                      className="object-cover w-full rounded-xl"
                      src={game.thumbnail}
                      alt="Ini gambar game"
                    />
                    <div className="py-4 px-2 flex flex-col text-white">
                      <h2 className="text-xl font-semibold ">
                        {truncateString(game.title, 20)}
                      </h2>
                      <h2 className="text-xs mt-1">
                        short description :{" "}
                        {truncateString(game.short_description, 20)}
                      </h2>
                      <h2 className="text-xs mt-1">
                        release : {game.release_date}
                      </h2>
                      <h2 className="text-xs mt-1">
                        developer : {game.developer}
                      </h2>
                      {/* <a href={game.game_url} class="text-xs mt-1 decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out">game url</a> */}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Category;
