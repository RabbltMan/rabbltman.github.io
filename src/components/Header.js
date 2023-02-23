import React from "react";
import "../style/Header.css";
import "../style/Frontpage.css";
import { Link } from "react-router-dom";
import SiteLogo from "../resources/dumbRabbltLogo.png";
import { BiMenu } from "react-icons/bi";

function Header() {
  const HeaderItem = ["headerItem", "headerItem", "headerItem", "headerItem"];
  const HeaderItemContent = [
    "headerItemContent",
    "headerItemContent",
    "headerItemContent",
    "headerItemContent",
  ];
  const routerPath = window.location.pathname;
  switch (routerPath) {
    case "/":
      HeaderItem[0] += " Selected";
      break;
    case "/Archive":
      HeaderItem[2] += " Selected";
      break;
    default:
      break;
  }
  return (
    <React.Fragment>
      <div className="siteHeader">
        <img className="logo" src={SiteLogo} alt=""></img>
        <h1 className="headerSiteName">荐食</h1>
        {/* 1000px width */}
        <div className="headerItemSection">
          <Link to={`/`}>
            <div className={HeaderItem[0]}>
              <p className={HeaderItemContent[0]}>HOME</p>
            </div>
          </Link>
          <div className={HeaderItem[1]}>
            <p className={HeaderItemContent[1]}>EVENTS</p>
          </div>
          <Link to={`/Archive`}>
            <div className={HeaderItem[2]}>
              <p className={HeaderItemContent[2]}>ARCHIVE</p>
            </div>
          </Link>
          <div className={HeaderItem[3]}>
            <p className={HeaderItemContent[3]}>MISC</p>
          </div>
        </div>
        <div className="MobileMenuContent">
          <BiMenu id="ToggleMenu" />
          <p className="menuItemSection">
            <Link to={`/`} className="LineLink">
              <div className="MenuItem">
                <p className="MenuItemContent">HOME</p>
              </div>
            </Link>
            <Link className="LineLink">
              <div className="MenuItem">
                <p className="MenuItemContent">EVENTS</p>
              </div>
            </Link>
            <Link to={`/Archive`} className="LineLink">
              <div className="MenuItem">
                <p className="MenuItemContent">ARCHIVE</p>
              </div>
            </Link>
            <Link className="LineLink">
              <div className="MenuItem">
                <p className="MenuItemContent">MISC</p>
              </div>
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
