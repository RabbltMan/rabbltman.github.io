import React from "react";
import Frontpage from "../components/Frontpage";
import Header from "../components/Header";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Frontpage />
      </React.Fragment>
    );
  }
}

export default Main;
