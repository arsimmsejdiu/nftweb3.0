import "./Header.css"
import punkLogo from "../assets/header/punkLogo.png";
import searchIcon from "../assets/header/search.png";
import theme from "../assets/header/theme-switch.png";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} alt="punk" className="punkLogo"/>
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="search icon" className="searchIcon" />
        </div>
        <input type="text" placeholder="Collection, item or user ... " className="searchInput"/>
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={theme} alt="theme switch img" />
        </div>
      </div>
      <div className="loginButton">
        GET IN
      </div>
    </div>
  );
}

export default Header;
