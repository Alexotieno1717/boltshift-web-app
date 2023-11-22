import { Bars3BottomLeftIcon, BellIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className="lg:max-w-7xl mx-auto p-4 bg-white px-8">
      <div className="flex flex-row p-2 items-center">
        <Bars3BottomLeftIcon className="h-6 w-6" />
        <div className="flex pl-3 gap-3">
          <Image src="/Logomark.svg" width={44} height={44} alt="logomark" />
          <Image src="/Logotype.svg" width={115} height={23} alt="logotype" />
        </div>
        <div className="lg:max-w-4xl items-center pl-4">
          <form action="" className="flex lg:max-w-4xl">
            <input type="text" placeholder="Search for items" className="border border-[#D0D5DD] rounded-md" />
            <button className="flex p-2 justify-center items-center gap-8 text-white border-t-0 rounded-md border-r-0 border-b-0 border-l-0 border-solid border-1 border-[#870064] bg-[#870064] shadow-xs">
              Search
            </button>
          </form>
        </div>
        <div className="flex gap-1 pl-4 items-center">
          <HeartIcon className="h-6 w-6" />
          <ShoppingCartIcon className="h-6 w-6" />
          <BellIcon className="h-6 w-6" />
          <img src="/User-Avatar.png" alt="user Avatar" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default Header;
