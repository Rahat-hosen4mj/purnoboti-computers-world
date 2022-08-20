import React from "react";
import PortfolioBanner from "./PortfolioBanner";
import PortfolioFotter from "./PortfolioFotter";
import PortfolioHome from "./PortfolioHome";
import PreviousWork from "./PreviousWork";
import Resume from "./Resume";

const MyPortfolio = () => {
  return (
    <>
    {/* <Resume /> */}
    <PortfolioHome />
    <PreviousWork />
      <PortfolioBanner />
      <PortfolioFotter />
    </>
  );
};

export default MyPortfolio;
