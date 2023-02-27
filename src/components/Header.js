import React from "react";
import { Link } from "react-router-dom";
import SiteLogo from "../resources/dumbRabbltLogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/Frontpage.css";
import "../style/Header.css";

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
    case "/Events":
      HeaderItem[1] += " Selected";
      break;
    case "/Archive":
      HeaderItem[2] += " Selected";
      break;
    case "/Misc":
      HeaderItem[3] += " Selected";
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
          <Link to={`/`} className="NoDecoration">
            <div className={HeaderItem[0]} id="mainHeader">
              <p className={HeaderItemContent[0]} id="mainHeader">
                HOME
              </p>
            </div>
          </Link>
          <Link to={`/Events`} className="NoDecoration">
            <div className={HeaderItem[1]} id="mainHeader">
              <p className={HeaderItemContent[1]} id="mainHeader">
                EVENTS
              </p>
            </div>
          </Link>
          <Link to={`/Archive`} className="NoDecoration">
            <div className={HeaderItem[2]} id="mainHeader">
              <p className={HeaderItemContent[2]} id="mainHeader">
                ARCHIVE
              </p>
            </div>
          </Link>
          <Link to={`/Misc`} className="NoDecoration">
            <div className={HeaderItem[3]} id="mainHeader">
              <p className={HeaderItemContent[3]} id="mainHeader">
                MISC
              </p>
            </div>
          </Link>
        </div>
        <div className="MobileMenuContent">
          <p className="menuItemSection">
            <Link to={`/`} className="NoDecoration">
              <div className={HeaderItem[0]} id="mobileHeader">
                <p className={HeaderItemContent[0]} id="mobileHeader">
                  HOME
                </p>
              </div>
            </Link> 
            <Link to={`/Events`} className="NoDecoration">
              <div className={HeaderItem[1]} id="mobileHeader">
                <p className={HeaderItemContent[1]} id="mobileHeader">
                  EVENTS
                </p>
              </div>
            </Link>
            <Link to={`/Archive`} className="NoDecoration">
              <div className={HeaderItem[2]} id="mobileHeader">
                <p className={HeaderItemContent[2]} id="mobileHeader">
                  ARCHIVE
                </p>
              </div>
            </Link>
            <Link to={`/Misc`} className="NoDecoration">
              <div className={HeaderItem[3]} id="mobileHeader">
                <p className={HeaderItemContent[3]} id="mobileHeader">
                  MISC
                </p>
              </div>
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
