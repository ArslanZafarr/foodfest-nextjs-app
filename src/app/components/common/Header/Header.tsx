import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="container w-full h-[80px] flex items-center justify-between  bg-transparent">
      <Link href={"/"}>
        <h1 className="text-red-500 text-2xl font-bold hover:text-red-700">
          #FoodFest
        </h1>
      </Link>

      <div className="relative flex items-center gap-[20px]">
        <button>Create Restaurant</button>
        <button
          onClick={toggleDropdown}
          className="relative flex items-center gap-1"
        >
          <Image
            className="w-10 h-10 rounded-full object-cover"
            src={"/images/home/cover_section.jpg"}
            width={48}
            height={48}
            alt="user"
          />
          <h5>Arslan</h5>
          <FaChevronDown
            className={`transition-transform duration-200 ${
              isDropdownOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-56 mt-2 top-14 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/settings">Settings</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        )}

        <Link href={"/sign-in"}>
          <button className="bg-red-600 text-white px-[20px] py-[10px] rounded-md">
            Sign In
          </button>
        </Link>

        <Link href={"/sign-up"}>
          <button className="bg-blue-500 text-white px-[20px] py-[10px] rounded-md">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
