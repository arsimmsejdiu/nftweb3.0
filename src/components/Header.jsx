import "./Header.css"
import punkLogo from "../assets/header/punkLogo.png"

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} alt="punk" className="punkLogo"/>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search for a beer" className="searchInput"/>
      </div>
    </div>
  );
}

export default Header;
