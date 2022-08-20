import React from "react";
import { useParams } from "react-router-dom";
import {useQuery} from 'react-query'
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { id } = useParams();

  const stripePromise = loadStripe('pk_test_51LLXsyHA3nJCoW2U9oVRkeFCsXDneMJa1XUIKTdCqRQe15E8YcpHCeTSgfmr1ddhDwvcTnq2THblO16s6HhFL82B00mda1SkZq');
  const url = `http://localhost:5000/order/${id}`;

  const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
      method: 'GET',
      headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
  }).then(res => res.json()));
 if(isLoading){
  return <Loading />
 }
 
  return (
    <>
      <div>
        <div class="card  w-50 max-w-md bg-base-100 shadow-xl mb-4">
        <div className="card-body">
                    <p className="text-success font-bold text-xl">Hello, {order?.buyerName}</p>
                    <h2 className="card-title text-purple-500">Please Pay for {order?.product}</h2>
                  
                    <p className="text-2xl text-white font-medium"> pay : ${order.price}</p>
                </div>
        </div>
        <div className="card w-50 max-w-md shadow-2xl bg-gray-50">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
      </div>
    </>
  );
};

export default Payment;
