import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x8D67256b9A200A0222B5BdE2C0172596Dc6FFE7B&order_direction=asc"
      );
      // console.log(openSeaData.data.assets);
      setPunkListData(openSeaData.data.assets);
    };
    return getMyNfts();
  }, []);

  console.log(punkListData);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <div>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </div>
      )}
    </div>
  );
}

export default App;
