import React from "react";
import "../style/Header.css"
import SiteLogo from "../resources/dumbRabbltLogo.png"

class Header extends React.Component {
    render() {
        return (
            <div className="siteHeader">
                <img className="logo" src={SiteLogo} alt=""></img>
                <h1 className="headerSiteName">荐食</h1>
                {/* 1000px width */}
                <div className="headerItemSection">
                    <div className="headerItem">
                        <p classname="headerItemContent">HOME</p>
                    </div>
                    <div className="headerItem">
                        <p classname="headerItemContent">EVENTS</p>
                    </div>
                    <div className="headerItem">
                        <p classname="headerItemContent">ARCHIVE</p>
                    </div>
                    <div className="headerItem">
                        <p classname="headerItemContent">MISCELLANEOUS</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;