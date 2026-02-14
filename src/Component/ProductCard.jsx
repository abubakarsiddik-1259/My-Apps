import rating from "../Component/../assets/icon-ratings.png";
import download from "../Component/../assets/icon-downloads.png";
import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { title, downloads, image, ratingAvg, id } = product;
  return (
    <div className="">
      <Link to={`/product/${id}`}>
        <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out  ">
          <figure>
            <img
              src={image}
              className="h-30 w-30 rounded-xl object-cover"
              alt="Shoes"
            />
          </figure>
          <div className="">
            <h2 className="card-title py-4">{title}</h2>
            <div className="flex justify-between items-center ">
              <span className="flex items-center px-2 bg-[#F1F5E8] text-[#00D390] rounded-xl ">
                <img src={download} className="h-4 mx-1" alt="" /> {downloads}M
              </span>
              <span className="flex items-center px-2 bg-[#FFF0E1] text-[#FF8811] rounded-xl ">
                <img src={rating} className="h-4 mx-1" alt="" /> {ratingAvg}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
