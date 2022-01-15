import CollectionCard from "./CollectionCard";
import "./PunkList.css";

function PunkList({ punkListData }) {
  console.log(punkListData);
  return (
    <div className="punkList">
      {punkListData.map((punk) => (
        <div key={punk.token_id} className="punkListData">
          <CollectionCard {...punk} />
        </div>
      ))}
    </div>
  );
}

export default PunkList;
