import "./CollectionCard.css";
import weth from "../assets/weth.png";

const CollectionCard = ({ id, image_original_url, name, traits, token_id }) => {
  return (
    <div className="collectionCard">
      <img src={image_original_url} alt="punks" />
      <div className="details">
        <div className="name">
          {name} <span>#{id}</span>
          <div className="id">&#183; #{token_id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} alt="eth" className="ethImage" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
