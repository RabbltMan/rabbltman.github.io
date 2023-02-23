import React from "react";
import { Link } from "react-router-dom";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";

class HeaderRedirector extends React.Component {
  render() {
    switch (this.props.path) {
      case "/":
        return (
          <div className="MobileMenu">
            <p className="MobileMenuContent">
              <Link to={`/menu`}>
                <BiMenu id="ToggleMenu" />
              </Link>
            </p>
          </div>
        );

      case "/menu":
        return (
          <div className="MobileMenu">
            <p className="MobileMenuContent">
              <Link to={`/`}>
                <BiMenuAltRight id="ToggleMenu" />
              </Link>
            </p>
          </div>
        );

      default:
        return (
          <div className="MobileMenu">
            <p className="MobileMenuContent">
              <Link to={`/menu`}>
                <BiMenu id="ToggleMenu" />
              </Link>
            </p>
          </div>
        );
    }
  }
}

export default HeaderRedirector;
