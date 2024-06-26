import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] flex items-center justify-between px-[100px] bg-transparent">
      <Link href={"/"}>
        <h1 className="text-red-500 text-2xl font-bold hover:text-red-700">
          #FoodFest
        </h1>
      </Link>

      <div className="flex items-center gap-[20px]">
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
