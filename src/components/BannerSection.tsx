import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';

function BannerSection() {
  return (
    <div id="banner-bg" className="lg:max-w-7xl grid grid-cols-2 gap-6 mx-auto px-4 lg:px-0 my-20">
      <div className="lg:max-w-72 mx-auto flex flex-col justify-center items-start pt-24 px-[162px]">
        <div className="text-[#1F0217] flex justify-center p-2 bg-white border border-[#7B6AE0] rounded-md mb-5">
          Opening Sales Discount 50%
        </div>
        <h1 className="text-3xl font-semibold text-[#870064]">
          Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood
        </h1>
        <p className="truncate-3-lines pt-2 text-[#475467]">
          This velvet couch is a sophisticated and trendy sofa that focuses on furniture because of its sumptuous velvet
          quilted fabric and strong wood legs. Make the living area feel like a million bucks with this couch because
          this three-seated couch is sleek and trendy, converting any living area into a fashionable environment. This
          sofa&apos;s robust wood construction ensures it will provide years of reliable service. With its long-lasting
          support and deep comfort, this couch is the perfect choice for your home. As for the inside, it&apos;s
          comprised of solid, high-resilience foam, a substance chosen for its ability to return to its former shape
          swiftly and with a nice greeting.
        </p>
        <button className="w-full flex justify-center rounded-lg bg-[#66004B] text-white py-3 px-5 gap-2 mt-11">
          Shop Now
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <path
              d="M8 15.5L13 10.5L8 5.5"
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="relative">
        <img src="/Product_Image.png" alt="Product_Image" className="relative w-full rounded-md" />
        <HeartIcon className="absolute top-0 right-0  w-8 h-8 m-2 flex-shrink-0 bg-white text-[#66004B] rounded-full p-2" />
      </div>
    </div>
  );
}

export default BannerSection;
