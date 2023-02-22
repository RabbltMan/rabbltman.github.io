import React from "react";
import Frontpage from "./Frontpage";
import MobileMenu from "./MobileMenu";

class FrontpageRedirector extends React.Component {
  render() {
    switch (this.props.path) {
      case "/":
        return <Frontpage />;

      case "/menu":
        return <MobileMenu />;

      default:
        return <Frontpage />;
    }
  }
}

export default FrontpageRedirector;
