import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { Dna } from "react-loader-spinner";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Detail = () => {
  const { id } = useParams();

  const [detailgames, setdetailgames] = useState([]);

  const [loading, setLoading] = useState(true);

  const detailgame = async () => {
    axios
      .get("https://free-to-play-games-database.p.rapidapi.com/api/game", {
        params: { id: `${id}` },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
        },
      })
      // console.log(res.data.slice(0, 10))
      .then((res) => {
        setdetailgames(res.data);
      })
      .catch((res) => {
        console.log(res.data);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
    detailgame();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{detailgames.title}</title>
        <meta name="description" content={`Top games ${id} in Pc or desktop`} />
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
            <h2 className="font-semibold -m-5 textw">
              Loding detail game {detailgames.title}
            </h2>
          </div>
        </>
      ) : (
        <>
          <Header />
          <div className="bg-detail w-full flex items-start p-52">
            <div className="w-1/2 px-5 items-start">
              <div className="flex flex-col">
                <img src={detailgames.thumbnail} alt="gambar game" />
              </div>
            </div>
            <div className="w-1/2 px-5 items-start">
              <div className="flex flex-col text-white">
                <p className="text-xl mt-1">Game name : {detailgames.title}</p>
                <p className="text-xl  mt-5">
                  short description : {detailgames.short_description}
                </p>
                <p className="text-xl  mt-5 justify-around">
                  description : {detailgames.description}
                </p>
                <p className="text-xl  mt-5">
                  platform: {detailgames.platform}
                </p>
                <p className="text-xl  mt-5">genre: {detailgames.genre}</p>
                <p className="text-xl  mt-5">
                  game url :{" "}
                  <a class="text-white" href={detailgames.game_url}>
                    {detailgames.title}
                  </a>
                </p>
                <p className="text-xl mt-5">minimum system requirements : </p>
                <li className="text-xl  mt-5">
                  {detailgames.minimum_system_requirements.os}
                </li>
                <li className="text-xl  mt-5">
                  {detailgames.minimum_system_requirements.processor}
                </li>
                <li className="text-xl  mt-5">
                  {detailgames.minimum_system_requirements.memory}
                </li>
                <li className="text-xl  mt-5">
                  {detailgames.minimum_system_requirements.graphics}
                </li>
                <li className="text-xl  mt-5">
                  {detailgames.minimum_system_requirements.storage}
                </li>
              </div>
            </div>
          </div>
          <Footer/>
        </>
      )}
    </>
  );
};

export default Detail;
