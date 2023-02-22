import React from "react";
import "../style/Frontpage.css";
import { Link } from "react-router-dom";

class MobileMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div className="menuItemSection">
            <Link to={`/`}>
              <div className="MenuItem">
                <p className="MenuItemContent">HOME</p>
              </div>
            </Link>
            <div className="MenuItem">
              <p className="MenuItemContent">EVENTS</p>
            </div>
            <Link to={`/Archive`}>
              <div className="MenuItem">
                <p className="MenuItemContent">ARCHIVE</p>
              </div>
            </Link>
            <div className="MenuItem">
              <p className="MenuItemContent">MISC</p>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default MobileMenu;