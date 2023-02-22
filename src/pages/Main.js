import React from "react";
import Header from "../components/Header";
import FrontpageRedirector from '../components/FrontpageRedirector'
import { useLocation } from "react-router-dom";

function Main() {
  const routerPath = useLocation()["pathname"];
  return (
    <React.Fragment>
      <Header />
      <FrontpageRedirector path={routerPath}/>
    </React.Fragment>
  );
}

export default Main;
