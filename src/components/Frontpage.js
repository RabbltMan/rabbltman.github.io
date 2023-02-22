import React from "react";
import "../style/Frontpage.css";
import BackgroundPic from "../resources/bgp.png";

class Frontpage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="imgBox">
          <img className="siteFrontBackground" src={BackgroundPic} alt=""></img>
        </div>
      </React.Fragment>
    );
  }
}

export default Frontpage;
