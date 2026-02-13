import React from "react";
import MyLink from "./MyLink";
import logo from "../Component/../assets/logo.png";
import { Link } from "react-router";
const Navbar = () => {
  const links = (
    <>
      <li className="text-black">
        <MyLink to="/">Home</MyLink>
      </li>

      <li className="text-black">
        <MyLink to="/proflie">Apps</MyLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className=" flex justify-center items-center mx-8 text-xl">
          <img src={logo} className="h-8 pr-2" alt="" />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#632EE3] bg-clip-text text-transparent text-[15px]">
            HERO.IO
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-[#632EE3] to-[#632EE3] text-white">
          <i class="fa-brands fa-github"></i> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
