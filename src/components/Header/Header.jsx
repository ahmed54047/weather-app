import React from "react";
import logo from "../../../public/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-[#1E202B] text-gray-50 pe-36 ps-36 flex justify-between items-center pt-10 pb-10">
      <div>
        <img src={logo} alt="logo" className="inline-block w-20" />
        <div className="inline-block align-middle ps-3">
          <h1 className="font-bold ">Weather</h1>
          <p className="text-gray-500">tagline goes here</p>
        </div>
      </div>
      <div>
        <ul>
          <li className="inline align-middle rounded-2xl p-2 ps-3 pe-3 me-12">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-2 border-blue-400 rounded-2xl p-2 ps-3 pe-3"
                  : ""
              }
            >
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li className="inline align-middle active:border-2 active:border-blue-700 active:text-blue-700 rounded-2xl p-2 ps-3 pe-3 me-12">
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-2 border-blue-400 rounded-2xl p-2 ps-3 pe-3"
                  : ""
              }
            >
              {" "}
              News{" "}
            </NavLink>
          </li>
          <li className="inline align-middle active:border-2 active:border-blue-700 active:text-blue-700 rounded-2xl p-2 ps-3 pe-3 me-12">
            <NavLink
              to="/live"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-2 border-blue-400 rounded-2xl p-2 ps-3 pe-3"
                  : ""
              }
            >
              {" "}
              Live camera{" "}
            </NavLink>
          </li>
          <li className="inline align-middle active:border-2 active:border-blue-700 active:text-blue-700 rounded-2xl p-2 ps-3 pe-3 me-12">
            <NavLink
              to="/photo"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-2 border-blue-400 rounded-2xl p-2 ps-3 pe-3"
                  : ""
              }
            >
              {" "}
              Photos{" "}
            </NavLink>
          </li>
          <li className="inline align-middle active:border-2 active:border-blue-700 active:text-blue-700 rounded-2xl p-2 ps-3 pe-3 me-12">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-2 border-blue-400 rounded-2xl p-2 ps-3 pe-3"
                  : ""
              }
            >
              {" "}
              Contact{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
