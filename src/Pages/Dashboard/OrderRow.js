import React from 'react';

const OrderRow = ({order, index}) => {
    return (
        <div>
            <tr>
                            <td>{index + 1}</td>
                            <td>{order.buyerName}</td>
                           
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                        </tr>
        </div>
    );
};

export default OrderRow;