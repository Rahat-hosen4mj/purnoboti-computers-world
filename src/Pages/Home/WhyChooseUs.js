import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <div className="bg-gray-200 pt-12 pb-3">
        <h2 className="sm:text-5xl text-5xl text-center font-medium text-green-400">
          Why Choose us
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center align-center bg-gray-200 gap-4 py-12">
        <div className="card flex w-96 bg-gray-100  shadow-xl">
          <div className="card-body">
            <i className="fas fa-shipping-fast text-5xl text-green-500"></i>
            <div className="content">
              <h3 className="sm:text-4xl text-4xl mb-4 font-medium text-green-400">
                free shipping
              </h3>
              <p className="sm:text-2xl text-2xl mb-4 font-medium text-gray-700">
                order over $1000
              </p>
            </div>
          </div>
        </div>
        <div className="card flex w-96 bg-gray-100  shadow-xl">
          <div className="card-body">
            <i className="fas fa-lock  text-5xl text-green-500"></i>
            <div className="content">
              <h3 className="sm:text-4xl text-4xl mb-4 font-medium text-green-400">
                secure payment
              </h3>
              <p className="sm:text-2xl text-2xl mb-4 font-medium text-gray-700">
                100 secure payment
              </p>
            </div>
          </div>
        </div>
        <div className="card flex w-96 bg-gray-100 shadow-xl">
          <div className="card-body">
            <i className="fas fa-headset  text-5xl text-green-500"></i>
            <div className="content">
              <h3 className="sm:text-4xl text-4xl mb-4 font-medium text-green-400">
                24/7 support
              </h3>
              <p className="sm:text-2xl text-2xl mb-4 font-medium text-gray-700">
                call us anytime
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200  pb-8">
        <div class="flex flex-wrap text-center">
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              2.7K
            </h2>
            <p class="leading-relaxed">Employee</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              100+
            </h2>
            <p class="leading-relaxed">high quality product</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              7.5K
            </h2>
            <p class="leading-relaxed">Reviews</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              $100M
            </h2>
            <p class="leading-relaxed">Revenue</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
