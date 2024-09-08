import React from "react";
import Image from "next/image";
const Categories = () => {
  return (
    // Categories
    <div className="pt-3 cursor-pointer pb-6 flex items-center justify-around space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="/icn_category.png"
          alt="Category image"
          width={20}
          height={20}
        />

        <span className="text-xs">Superstars</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="/icn_category.png"
          alt="Category image"
          width={20}
          height={20}
        />

        <span className="text-xs">New</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="/icn_category.png"
          alt="Category image"
          width={20}
          height={20}
        />

        <span className="text-xs">Wow!</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="/icn_category.png"
          alt="Category image"
          width={20}
          height={20}
        />

        <span className="text-xs">Great view</span>
      </div>
    </div>
  );
};

export default Categories;
