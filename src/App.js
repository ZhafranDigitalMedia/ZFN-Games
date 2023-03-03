import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Category from "./Components/Category";
import Home from "./Components/Home";
import { RotatingTriangles } from "react-loader-spinner";
import { useEffect, useState } from "react";
import Detail from "./Components/Detail";
// import Game from './Components/Game';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  });
  return (
    <div>
      {loading ? (
        <>
          <div className="flex flex-col h-screen justify-center items-center">
            <RotatingTriangles
              visible={true}
              height="80"
              width="80"
              ariaLabel="rotating-triangels-loading"
              wrapperStyle={{}}
              wrapperClass="rotating-triangels-wrapper"
            />
            <h2 className="font-semibold -m-5 textw">Loding...</h2>
          </div>
        </>
      ) : (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/category/:games" element={<Category />} />
              <Route path="/game/:id" element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
