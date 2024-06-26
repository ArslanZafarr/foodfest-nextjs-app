import Link from "next/link";
import React from "react";

const AuthHeader = () => {
  return (
    <header className="w-full h-[80px] flex items-center justify-between px-[100px] bg-transparent">
      <Link href={"/"}>
        <h1 className="text-red-500 text-[24px] font-bold hover:text-red-700">
          #FoodFest
        </h1>
      </Link>
    </header>
  );
};

export default AuthHeader;
