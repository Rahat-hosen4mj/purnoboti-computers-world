import React from "react";
import graphics from "../../assets/images/graphics.png";

const DealOfDay = () => {
  return (
    <>
      <section className="text-gray-600 bg-gray-100 body-font px-6">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-700">
              deal of the day
            </h3>
            <h1 className="sm:text-5xl text-5xl mb-4 font-medium text-green-400">
              upto 50% off
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Buy Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={graphics}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DealOfDay;
