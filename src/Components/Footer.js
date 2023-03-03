/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import imgs from "../picture/game.jpeg";
import imgh from "../picture/gamea.jpeg";
import imga from "../picture/game.jpg";
import desa from "../picture/desa.jpeg";


const Footer = () => {
  return (
    <section>
      <footer class="text-center text-white bg-ku">
        <div class="container p-6 text-center flex justify-center">
          <div class="grid lg:grid-cols-6 md:grid-cols-3 gap-4 text-center">
            <div class="lg:mb-0 mb-6">
              <img
                src={imgs}
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src={imgh}
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src={imga}
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src={desa}
                class="w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>

        <div class="text-center p-4 bg-ku2">
          Copyrigh 2021 ©
        </div>
      </footer>
    </section>
  );
};

export default Footer;
