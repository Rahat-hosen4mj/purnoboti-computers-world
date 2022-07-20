import React, { useEffect, useState } from "react";
import client1 from "../../assets/images/pic-5.png";
import ReviewCard from "./ReviewCard";

const ClientReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data =>setReviews(data))
    },[])
  return (
    <div className="py-8 px-8 bg-gray-300">
      <div className="text-center">
        <h3 className="text-green-500 font-medium   text-3xl  py-2 uppercase">
        What people say
        </h3>
        <h2 className="text-2xl mb-8 font-medium text-gray-900">
           About us..
        </h2>
      </div>
      
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {
        reviews.map(review =><ReviewCard review={review} key={review.id}></ReviewCard>)
      }
      </div>
     
    </div>
  );
};

export default ClientReviews;
