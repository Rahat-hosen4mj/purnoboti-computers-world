import React from 'react';
import useParts from '../../hooks/useParts';

const ManageProduct = () => {
    const [parts, setParts] = useParts()
    return (
        <div>
        <h2>My Order: {parts?.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>No :</th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Price <small>(per piece)</small> </th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parts.map((part, index) =><tr>
                            <td>{index + 1}</td>
                            <td>{part.name}</td>
                            <td>{part.avlQuantity}</td>
                            <td>${part.price}</td>
                             <td> <button  class="btn btn-xs btn-error">Delete</button></td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageProduct;