import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Parts = ({part}) => {
    const {img, name, price, minOrder, avlQuantity, description, _id} = part;

    const navigate = useNavigate();
    const navigateToPurchage = id =>{
        navigate(`/${id}`)
    }
  
    return (
        <>
          <div className="container py-4 px-6 mx-auto bg-gray-200">
          <div className="lg:w-full mx-auto flex flex-wrap ">
            <img
              alt="ecommerce"
              className="lg:w-4/5 mx-auto w-full lg:h-52 h-full rounded"
              src={img}
            />
            <div className="w-full pt-6  mb-6 ">
                <h2 className="text-3xl font-medium">{name}</h2>
              <p className="leading-relaxed my-3">
             {description}
              </p>
              
              <div className="flex border-t border-gray-200 py-2 pr-2">
              <span className="text-gray-500">Available Quantity</span>
                <span className="ml-auto text-gray-900">{avlQuantity}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2 pr-2">
                <span className="text-gray-500">Minimum Order</span>
                <span className="ml-auto text-gray-900">{minOrder}</span>
              </div>
              
              <div className="flex pt-4">
                <span className="title-font font-medium text-2xl text-gray-900">
                ${price}
                </span>
                <button onClick={() =>navigateToPurchage(_id)} className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Purchage</button>
              </div>
            </div>
          </div>
        </div>  
        </>
    );
};

export default Parts;