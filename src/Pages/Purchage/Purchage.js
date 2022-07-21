import React from 'react';
import { useParams } from "react-router-dom";
import usePurchage from "../../hooks/usePurchage";

const Purchage = () => {
    const { purchage } = useParams();
    const [part, setPart] = usePurchage(purchage)
    const {img, name, price, minOrder, avlQuantity, description, _id} = part;
    return (
        <>
        <section class="text-gray-800 bg-slate-200 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{name}</h1>
        <p class="leading-relaxed mb-4">{description}</p>
        <div className="flex border-t border-gray-200 py-2 pr-2">
              <span className="text-gray-500">Available Quantity</span>
                <span className="ml-auto text-gray-900">{avlQuantity}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2 pr-2">
                <span className="text-gray-500">Minimum Order quantity</span>
                <span className="ml-auto text-gray-900">{minOrder}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2 pr-2">
                <span className="text-gray-500">Order quantity</span>
                <span className="ml-auto text-gray-900">100</span>
              </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Order</button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-2/5 w-full lg:h-auto h-64 object-cover object-center rounded" src={img} />
    </div>
  </div>
</section>
        </>
    );
};

export default Purchage;