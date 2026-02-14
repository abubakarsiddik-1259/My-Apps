import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hook/useProducts";
import down from "../assets/icon-downloads.png";
import rating from "../Component/../assets/icon-ratings.png";
import like from "../Component/../assets/icon-review.png";

const ProductDetaila = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();

  console.log(products);

  if (loading) return <p>Loading.........</p>;
  // const product = products.find((p) => String(p.id) === id);
  const product = products.find((p) => p.id === Number(id));

  const {
    title,
    image,
    reviews,
    companyName,
    ratingAvg,
    downloads,
    description,
    size,
  } = product || {};
  console.log(product);

  const handleAddToWishLish = () => {
    const existinglish = JSON.parse(localStorage.getItem("wishlish"));

    let updateList = [];

    if (existinglish) {
      const isDuplicate = existinglish.some((p) => p.id === product.id);

      if (isDuplicate) return alert("sorrrrrrrr");

      updateList = [...existinglish, product];
    } else {
      updateList.push(product);
    }

    localStorage.setItem("wishlish", JSON.stringify(updateList));
  };

  return (
    <div className="bg-gray-100 p-">
      <div className=" ">
        <div className="flex  border-b-2 border-gray-300">
          <figure className="bg-white md:pr-8  m-6 mx-auto">
            <img
              src={image}
              className="h-50 bg-green-300 md:m-20   p-8 w-50 object-cover"
              alt="Shoes"
            />
          </figure>
          <div className="md:mt-20 md:ml-8 text-start lg:mx-auto">
            <h1 className="font-bold lg:text-3xl">{title}</h1>
            <h3 className="lg:text-xl">
              Developed by{" "}
              <span className="primary-text-gradient">{companyName}</span>
            </h3>{" "}
            <br />
            <div className="h-[1px] bg-gray-400 w-100"></div>
            <div className="flex md:gap-10 lg:gap-30 lg:px-18">
              <div className="mt-9 ">
                <span>
                  <img src={down} className="h-8" alt="" />
                </span>
                <h3 className="text-p">Downloads</h3>
                <h1 className="font-bold text-2xl">{downloads}M</h1>
              </div>
              <div className="mt-9">
                <span>
                  <img src={rating} className="h-8" alt="" />
                </span>
                <h3 className="text-p">Average Ratings</h3>
                <h1 className="font-bold text-2xl">{ratingAvg}</h1>
              </div>
              <div className="mt-9">
                <span>
                  <img src={like} className="h-8 rounded-xl" alt="" />
                </span>
                <h3 className="text-p">Total Reviews</h3>
                <h1 className="font-bold text-2xl">{reviews}K</h1>
              </div>
            </div>
            <button
              onClick={handleAddToWishLish}
              className="btn lg:mx-12 btn-one mt-6 "
            >
              Install Now ({size}MB)
            </button>
            {/* .........  */}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <p className="p-12 text-start justify-center">
          <span className="font-semibold ">Description: </span> {description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetaila;
