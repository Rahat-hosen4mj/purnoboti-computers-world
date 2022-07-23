
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])

    useEffect(() =>{
        if(user){
            fetch(`http://localhost:5000/order`)
            .then(res => res.json())
            .then(data => setOrders(data))
        }
    },[user])

    return (
        <div>
        <h2>My Order: {orders?.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Buyer</th>
                        <th>Product</th>
                        <th>Price <small>(per piece)</small> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =><tr>
                            <td>{index + 1}</td>
                            <td>{order.buyerName}</td>
                            <td>{order.product}</td>
                            
                            <td>{order.price}</td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrder;