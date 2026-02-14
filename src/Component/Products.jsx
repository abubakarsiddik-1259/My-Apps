import React, { useState } from "react";

import { Link } from "react-router";
import ProductCard from "./ProductCard";
import useProducts from "../Hook/useProducts";

const Products = () => {
  const { products } = useProducts();

  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase();

  const searchedProducts = term
    ? products.filter((product) =>
        product.title.toLocaleLowerCase().includes(term),
      )
    : products;

  console.log(searchedProducts);

  return (
    <div>
      <div className="my-18">
        <h1 className="text-4xl pb-2 font-bold">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between  py-5 items-center">
        <h1 className="text-3xl font-semibold">
          <span className="text-2xl text-gray-800">
            ({searchedProducts.length}) Apps Found{" "}
          </span>
        </h1>

        <label className="input">
          <input
            value={search}
            type="search"
            placeholder="Products"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
