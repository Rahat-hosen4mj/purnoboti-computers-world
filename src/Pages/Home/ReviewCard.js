import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const ReviewCard = ({ review }) => {
 
  const { img, name, rating, mgs } = review;
  const ratingStar = parseInt(rating)
  return (
    <div className="card lg:max-w-lg text-gray-900 bg-gray-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="reviewPerson" className="w-24 rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{mgs}</p>
        <div>
          {[...Array(ratingStar)].map((elementInArray, index) => (
               <i key={index} className="fas fa-star text-green-500"></i>
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
