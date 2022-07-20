import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Parts = ({part}) => {
    const {img, name, price, minOrder, avlQuantity, description} = part
  
    return (
        <>
          <div class="container py-4 px-6 mx-auto bg-gray-200">
          <div class="lg:w-full mx-auto flex flex-wrap ">
            <img
              alt="ecommerce"
              className="lg:w-4/5 mx-auto w-full lg:h-52 h-full rounded"
              src={img}
            />
            <div class="w-full pt-6  mb-6 ">
                <h2 className="text-3xl font-medium">{name}</h2>
              <p class="leading-relaxed my-3">
             {description}
              </p>
              
              <div class="flex border-t border-gray-200 py-2 pr-2">
              <span class="text-gray-500">Available Quantity</span>
                <span class="ml-auto text-gray-900">{avlQuantity}</span>
              </div>
              <div class="flex border-t border-gray-200 py-2 pr-2">
                <span class="text-gray-500">Minimum Order</span>
                <span class="ml-auto text-gray-900">{minOrder}</span>
              </div>
              
              <div class="flex pt-4">
                <span class="title-font font-medium text-2xl text-gray-900">
                ${price}
                </span>
                <PrimaryBtn />
              </div>
            </div>
          </div>
        </div>  
        </>
    );
};

export default Parts;