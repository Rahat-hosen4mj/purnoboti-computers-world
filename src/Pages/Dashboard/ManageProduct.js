import React, { useState } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";


const ManageProduct = () => {
  const [deletingPart, setDeletingPart] = useState(null);
  const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://rocky-earth-79278.herokuapp.com/part', {
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
}).then(res => res.json()));

if (isLoading) {
    return <Loading></Loading>
}
//   const [parts, setParts] = useParts();
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
              <th>
                Price <small>(per piece)</small>{" "}
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{part.name}</td>
                <td>{part.avlQuantity}</td>
                <td>${part.price}</td>
                <td>
                  <td>
                    <label
                      onClick={() => setDeletingPart(part)}
                      for="delete-confirm-modal"
                      class="btn btn-xs btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingPart && (
        <DeleteConfirmModal
        refetch={refetch}
          deletingPart={deletingPart}
          setDeletingPart={setDeletingPart}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProduct;
