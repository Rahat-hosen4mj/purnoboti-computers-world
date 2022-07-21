import React from "react";
import PortfolioBanner from "./PortfolioBanner";
import PortfolioFotter from "./PortfolioFotter";
import PortfolioHome from "./PortfolioHome";
import PreviousWork from "./PreviousWork";

const MyPortfolio = () => {
  return (
    <>
    <PortfolioHome />
    <PreviousWork />
      <PortfolioBanner />
      <PortfolioFotter />
    </>
  );
};

export default MyPortfolio;
