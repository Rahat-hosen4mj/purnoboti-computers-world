import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyReview = () => {
  const navigate = useNavigate();
  const handleBooking = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const rating = event.target.rating.value;
    const mgs = event.target.review.value;
    const review = {
      name: name,
      rating: rating,
      mgs: mgs,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast(`Successfully add your review ${name}`);
          navigate("/");
        }
      });
    console.log("handle btn cliced kora hoice", name, rating, mgs);
    event.target.reset();
  };
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Give Review!</h1>
            <p class="py-6">
              Keep your message short and simple. Avoid unnecessary questions or
              phrases that your customers are unlikely to understand. If you
              would like them to review your business on a specific website, say
              so explicitly and provide clear instructions on how to do it. If
              you're going to ask for a rating, ask right away.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form
                onSubmit={handleBooking}
                className="grid grid-cols-1 gap-3 justify-items-center mt-2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="Rating out of 5"
                  name="rating"
                  id=""
                />

                <textarea
                  className="input input-bordered w-full max-w-xs"
                  placeholder="Your comment"
                  name="review"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <input
                  type="submit"
                  value="Post"
                  className="btn btn-secondary w-full max-w-xs"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
