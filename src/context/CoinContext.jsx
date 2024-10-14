import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "USD",
    symbol: "$",
  });

  // to fetch the details from the API
  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-xFdN1HZfbmJ2bfVAdLbzrbfs",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setAllCoin(response)) // to initialise the response data to the state variable
      .catch((err) => console.error(err)); 
  };

  useEffect(() => { 
    fetchCoinData();
  }, [currency]) //whenever the currency get update, useEffect will execute

  const contextValue = {
    allCoin, currency, setCurrency // these can be access in any components
  };

  return (
    // we can access the content inside the contextValue from any component
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
