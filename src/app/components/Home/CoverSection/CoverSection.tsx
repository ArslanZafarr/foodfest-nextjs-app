import Image from "next/image";
import React from "react";

const CoverSection = () => {
  return (
    <>
      <section className="relative h-[650px]">
        <div className="absolute w-full h-full">
          <Image
            className="w-full h-[650px] object-cover"
            src="/images/home/cover_section.jpg"
            alt="Cover"
            width="1920"
            height="480"
          />
        </div>
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Discover restaurants and more near you.
          </h1>
        </div>
      </section>
    </>
  );
};

export default CoverSection;
