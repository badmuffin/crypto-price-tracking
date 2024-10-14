import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
    // if empty, then reload all the top coins
    if(event.target.value === "")
      setDisplayCoin(allCoin);
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="px-3 pb-24">
      {/* header main part of the home page */}
      <div className="max-w-[600px] my-20 mx-auto flex flex-col items-center text-center gap-8">
        <h1 className="text-[64px] font-bold"> Largest Crypto Marketplace</h1>
        <p className=" text-lg font-medium w-3/4">
          {" "}
          Welcome to the one of the largest Cryptocurrency Marketplace. Sign up
          to explore more about cryptos
        </p>
        {/* by using flex, we can put both the content in the extreme corners */}
        <form onSubmit={searchHandler} className="p-2 w-4/5 bg-white rounded-3xl text-lg flex justify-between items-center gap-3">
          {/* Search bar */}
          {/* flex-1 will allow input to take all the available space */}
          <input
            className=" flex-1 text-black text-lg outline-none border-none pl-3"
            onChange={inputHandler}
            type="text"
            value={input}
            placeholder="Search Crypto.."
          />
          <button
            className=" text-white py-2 px-6 rounded-2xl cursor-pointer border-none bg-[#7927ff]"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      {/* tabluar structure for the crypto currencies */}
      <div className=" max-w-[800px] text-base m-auto rounded-2xl bg-gradient-to-b from-[rgba(84,3,225,0.15)] to-[rgba(105,2,153,0.15)]">
        {/* table layout */}
        <div className=" grid grid-cols-[1fr_7fr_3fr_3fr_4fr] py-4 px-5 items-center border-b border-b-gray-700">
          <p>#</p>
          <p>Coins</p>
          <p>Prices</p>
          <p className="text-center ">24H Change</p>
          <p className="text-right">Market Cap</p>
        </div>
        {displayCoin.slice(0, 20).map((item, index) => (
          <div
            className="grid grid-cols-[1fr_7fr_3fr_3fr_4fr] py-4 px-5 items-center border-b border-b-gray-700"
            key={index}
          >
            <p>{item.market_cap_rank}</p>
            <div className="flex justify-start gap-2 items-center">
              <img src={item.image} width={36} />
              <p className="pl-1">{item.name + " - " + item.symbol}</p>
            </div>
            <p className="text-left">
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={`text-center ${
                item.price_change_percentage_24h > 0
                  ? "text-green-600"
                  : "text-red-600"
              } `}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100} %
            </p>
            <p className="text-right">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
