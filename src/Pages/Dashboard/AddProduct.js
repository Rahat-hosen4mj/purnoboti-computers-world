import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

      const imageStorageKey = '809333cd2653b2fe985b53469c60e38c' 

      const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
          if(result.success){
            const img = result.data.url;
            const part = {
                
                name: data.name,
                description: data.description,
                price: data.price,
                avlQuantity: data.quantity,
                minOrder: data.minQuantity,
                img: img
            }
            // send to your database 
            fetch('http://localhost:5000/part', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(part)
            })
            .then(res =>res.json())
            .then(inserted =>{
              if(inserted.insertedId){
                  toast.success('part added successfully')
                  reset();
              }
              else{
                  toast.error('Failed to add the part');
              }
          })
    
      }
        })
      };

    return (
        <div className="pl-48">
      <h2 className="text-3xl text-lime-400 py-4">ADD part in the database</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter Product Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter srtDescription"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "description is Required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            autoComplete="off"
            placeholder="Enter quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("quantity", {
              required: {
                value: true,
                message: "quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.quantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            autoComplete="off"
            placeholder="Enter MinQuantity"
            className="input input-bordered w-full max-w-xs"
            {...register("minQuantity", {
              required: {
                value: true,
                message: "minQuantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.minQuantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.minQuantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            autoComplete="off"
            placeholder="Enter Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "price is Required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
       
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Add"
        />
      </form>
    </div>
    );
};

export default AddProduct;