import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Product from '../../../types';

interface HotDealsCardProps {
  product: Product;
}

function HotDealsCard({ product }: HotDealsCardProps) {
  const { imageSrc, title, price, availability } = product;
  return (
    <div>
      <div className="w-40 relative border border-[#EAECF0] rounded-md hover:border-[#870064]/50 hover:shadow-lg ease-in-out duration-700">
        <img src={imageSrc} alt="T-shirt" className="relative rounded-md w-full" />
        <HeartIcon className="absolute top-0 right-0  w-8 h-8 m-2 flex-shrink-0 bg-white text-[#66004B] rounded-full p-2 hover:text-red-500" />
        <div className="px-3 pt-4 pb-3">
          <p className="truncate-1-lines text-xs font-medium pt-3">{title}</p>
          <p className="text-[#870064] text-xs font-normal">Kshs. {price}</p>
          <div className="flex space-x-1 items-center">
            <div className="h-1 relative w-full rounded-full overflow-hidden">
              <div className=" w-full h-full bg-[#870064]/20 absolute "></div>
              <div className=" h-full bg-[#870064] absolute" style={{ width: 40 }}></div>
            </div>
            <img src="deals/fire.svg" alt="T-shirt" className="w-5 h-5" />
            <p className="text-[#870064] text-xs font-normal text-center flex-shrink-0">{availability} left</p>
          </div>
          <button className="flex mx-auto px-[14px] py-2  text-xs font-normal justify-center rounded-lg bg-white border border-gray-300 shadow-sm mt-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotDealsCard;
