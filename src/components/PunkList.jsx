import CollectionCard from "./CollectionCard";
import "./PunkList.css";

function PunkList({ punkListData, setSelectedPunk }) {
  //console.log(punkListData);
  return (
    <div className="punkList">
      {punkListData.map((punk) => (
        <div
          onClick={() => setSelectedPunk(punk.token_id)}
          key={punk.token_id}
          className="punkListData"
        >
          <CollectionCard {...punk} />
        </div>
      ))}
    </div>
  );
}

export default PunkList;
