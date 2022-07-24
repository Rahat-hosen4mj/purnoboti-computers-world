
import { signInWithPhoneNumber } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        if(user){
            fetch(`http://localhost:5000/order?buyer=${user.email}`,{
                method: 'GET',
                headers:{
                    'authorization': `Bearar ${localStorage.getItem('accessToken')}`
                }
            } )
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signInWithPhoneNumber(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
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
                        <th>No :</th>
                        <th>Buyer</th>
                        <th>Product</th>
                        <th>Price <small>(per piece)</small> </th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =><tr>
                            <td>{index + 1}</td>
                            <td>{order.buyerName}</td>
                            <td>{order.product}</td>
                            
                            <td>${order.price}</td>
                            <td>
                            <button class="btn btn-xs btn-error">Paid</button>
                            </td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrder;