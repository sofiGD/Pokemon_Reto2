import React, { useEffect, useState } from "react";

import getRandomNumber from "./utils/aleatorio";

import Type from "./Type";

import axios from "axios";

const App = () => {
  const [One, setOne] = useState({});
  const [refresh, setRefresh] = useState(false);

  const [id, setid] = useState(null)

  useEffect(() => {
    const api = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${getRandomNumber()}`;

      const response2 = await axios.get(url);

      setOne({ ...response2.data });
    };
    api();
  }, [refresh]);

  const api2 = async () => {
    let a = parseInt(One.id) + 1;

    const url = `https://pokeapi.co/api/v2/pokemon/${a}`;
    const response2 = await axios.get(url);
    setOne({ ...response2.data });
  };

  const handleClick = () => {
    api2();

  };

  const api3 = async () => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response2 = await axios.get(url);
    setOne({ ...response2.data });
  };

  return (
    <div className="bg-white  relative h-screen flex flex-col justify-center p-10">
      <img className="absolute" src="https://c.wallhere.com/photos/d2/69/1950x1230_px_All_anime_pokemon-1707593.jpg!d" alt="" />

      <div className="container flex flex-col  justify-center items-center absolute">
        <img
          className="w-1/4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/lñ%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="" s
        />
        <input type="text" className="p-1 bg-white border border-black text-black" placeholder="Search" value={id} onChange={(e) => {
          setid(e.target.value)

        }} />
        {/* <div className="text-white">{id}</div> */}
        <img
          className="w-30 rounded-xl border-white border-2 m-2 bg-white"
          src={One.sprites?.front_default}
          alt=""
        />

        <button
          className="bg-blue-500 w-1/3 py-2 rounded-xl border border-black  text-black text-xl font-light mb-4"
          onClick={() => {
            api3()
            setid("")
          }}
        >
          Buscar
        </button>
        <button
          className="bg-orange-600 w-1/3 py-2 rounded-xl border border-black text-black text-xl font-light mb-4"
          onClick={() => {
            setRefresh(!refresh);
          }}
        >
          Pokemon aleatorio
        </button>
        <button
          className="bg-green-600 w-1/3 py-2 rounded-xl border border-black text-black text-xl font-light"
          onClick={handleClick}
        >
          Siguiente pokemon
        </button>
      </div>


      <div className="bg-blue-800 w-1/5 py-1 absolute">
        <div className=" w-full flex justify-center flex-col items-center">
          <div className="flex justify-start w-1/5 mt-5">
            <h1 className="font-bold text-yellow-400 text-3xl">{One.id}</h1>
          </div>

          <div className=" w-1/5">
            <h1 className="text-red-400 font-bold text-lg">Name:</h1>
            <h1 className="font-bold text-black text-3xl">{One.name}</h1>
          </div>

          <div className=" w-1/5 mt-5">
            <h1 className="text-red-400 font-bold text-lg">Types:</h1>
            <ul className="">
              {One.types?.map((item, index) => {
                return <Type key={index} item={item}></Type>;
              })}
            </ul>
          </div>
        </div></div>
    </div>
  );
};

export default App;
