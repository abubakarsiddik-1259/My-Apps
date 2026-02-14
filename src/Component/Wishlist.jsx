import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";

const Wishlist = () => {
  const [wishlish, setWishlish] = useState([]);

  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedlish = JSON.parse(localStorage.getItem("wishlish"));

    if (savedlish) setWishlish(savedlish);
  }, []);

  const sorteditem = (() => {
    if (sortOrder === "price-ase") {
      return [...wishlish].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "price-dsc") {
      return [...wishlish].sort((a, b) => b.size - a.size);
    } else {
      return wishlish;
    }
  })();

  const handleRemove = (id) => {
    const existinglish = JSON.parse(localStorage.getItem("wishlish"));

    let updateList = existinglish.filter((p) => p.id !== id);

    setWishlish(updateList);

    localStorage.setItem("wishlish", JSON.stringify(updateList));
  };

  return (
    <div>
      <div className="my-18">
        <h1 className="text-4xl pb-2 font-bold">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between mb-5 mt-15 items-center">
        <h1 className="text-3xl font-semibold">
          <span className="text-2xl text-gray-500">
            ({wishlish.length}) Apps Found{" "}
          </span>
        </h1>

        <label className="form-control lg:w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onClick={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="price-ase">Low → High</option>
            <option value="price-dsc">High → Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-2">
        {sorteditem.map((p) => (
          <div key={p.id} className="card card-side bg-base-100 shadow-sm">
            <figure>
              <img
                className="w-20 h-20  object-cover"
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.title}</h2>

              <div className="flex gap-2">
                <span className="flex items-center px-2 text-[#00D390] rounded-xl ">
                  <img src={download} className="h-2 mx-1" alt="" />{" "}
                  {p.downloads}M
                </span>
                <span className="flex items-center px-2 text-[#FF8811] rounded-xl ">
                  <img src={rating} className="h-4 mx-1" alt="" /> {p.ratingAvg}
                </span>
                <span className="text-gray-600">{p.size} MB</span>
              </div>
            </div>
            <div className="pr-4  flex items-center gap-2">
              <button
                onClick={() => handleRemove(p.id)}
                className="btn bg-[#00D390] text-white "
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* ...chart..  */}
      {/* <div className="space-y-3">
        <h3 className="text-xl font-semibold">Wishlish</h3>

        <div className="bg-base-100 rounded-xl p-4 h-80">
          <ResponsiveContainer width='100A% ' height='100%'>
            <BarChart data={wishlish}>
              <CartesianGrid strokeDasharray="3 3">
           

              </CartesianGrid>
                   <XAxis dataKey="category"></XAxis>
                   <Tooltip></Tooltip>
                   <Legend></Legend>
                   <Bar dataKey='price' fill='#82ca9d'></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div> */}
    </div>
  );
};

export default Wishlist;
