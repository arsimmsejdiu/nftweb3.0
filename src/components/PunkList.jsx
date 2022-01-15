import CollectionCard from "./CollectionCard";
//import king from "../assets/king.png";

function PunkList({ punkListData }) {
  console.log(punkListData);
  return (
    <div className="punkList">
      {punkListData.map((punk) => (
        <div>
          <CollectionCard key={punk.id} {...punk} />
        </div>
      ))}
    </div>
  );
}

export default PunkList;
