import React, { useState, useEffect } from "react";
import "./Main.css";
import instaLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import weth from "../assets/weth.png";
import more from "../assets/owner/more.png";

const Main = ({ punkListData, selectedPunk }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighLight">
          <div className="punkContainer">
            <img
              src={activePunk.image_original_url}
              alt="active punk"
              className="selectedPunk"
            />
          </div>
          {/* end of punkContainer */}
        </div>
        {/* end of punkHighLight div*/}
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name}</div>
          <div className="eth">
            <span className="itemNumber">&#183;#{activePunk.token_id}</span>
            <div className="priceContainer">
              <img src={weth} alt="eth" className="wethImage" />
              <div className="priceT"> {activePunk.traits[0]?.value}</div>
            </div>
          </div>
        </div>
        {/* end of punkDetails   */}
        <div className="owner">
          <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} alt="owner img" />
          </div>
          {/* end of ownerImageContainer   */}
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div className="address">
                0x8D67256b9A200A0222B5BdE2C0172596Dc6FFE7B
              </div>
              <div className="ownerHandle">@arsimsejdiu</div>
            </div>
            {/* end of ownerNameAndHandle div*/}
            <div className="ownerLink">
              <img src={instaLogo} alt="instagram" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="twitter logo" />
            </div>
            <div className="ownerLink">
              <img src={more} alt="more" />
            </div>
          </div>
          {/* end of ownerDetails div*/}
        </div>
        {/* end of owner div*/}
      </div>
      {/* end of mainContent*/}
    </div>
  );
};

export default Main;
