import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePurchage from "../../hooks/usePurchage";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchage = () => {
  const { purchage } = useParams();
  const navigate = useNavigate();
  const [part, setPart] = usePurchage(purchage);
  const { img, name, price, minOrder, avlQuantity, description, _id } = part;

  const [user, loading, error] = useAuthState(auth);
  const handleOrder = () => {
    const order = {
      orderId: _id,
      product: name,
      price: price,
      buyer: user.email,
      buyerName: user.displayName,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
          toast(`Successfully you order ${name}`);
          navigate('/');
      }
     
     
      });
    console.log('hanlde purchage click successfully', user)
  };

  return (
    <>
      <section className="text-gray-800 bg-slate-200 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {name}
              </h1>
              <p className="leading-relaxed mb-4">{description}</p>
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
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${price}
                </span>
                <button
                  onClick={handleOrder}
                  className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                >
                  Order
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-2/5 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={img}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchage;
