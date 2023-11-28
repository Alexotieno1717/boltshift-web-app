import { Bars3BottomLeftIcon, BellIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className="flex py-4 justify-center items-center content-center gap-4 w-full md:w-[1280px] flex-wrap rounded-none bg-white backdrop-blur-md">
      <Bars3BottomLeftIcon className="h-6 w-6" />
      <Image src="/Logomark.svg" width={44} height={44} alt="logomark" />
      <Image src="/Logotype.svg" width={115} height={23} alt="logotype" />
      <form action="" className="flex">
        <input type="text" placeholder="Search for items" className="border border-[#D0D5DD] rounded-md" />
        <button className="flex p-2 justify-center items-center gap-8 text-white border-t-0 rounded-md border-r-0 border-b-0 border-l-0 border-solid border-1 border-[#870064] bg-[#870064] shadow-xs">
          Search
        </button>
      </form>
      <HeartIcon className="h-6 w-6" />
      <ShoppingCartIcon className="h-6 w-6" />
      <BellIcon className="h-6 w-6" />
      <img src="/User-Avatar.png" alt="user Avatar" className="w-8 h-8" />
    </div>
  );
}

export default Header;

// import { Bars3BottomLeftIcon, BellIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
// import Image from 'next/image';
// import React from 'react';

// function Header() {
//   return (
//     <div className="flex w-full md:w-[1280px] mx-auto py-4 justify-center items-center content-center gap-4 flex-wrap rounded-none bg-white backdrop-blur-md">
//       <Bars3BottomLeftIcon className="h-6 w-6" />
//       <Image src="/Logomark.svg" width={44} height={44} alt="logomark" />
//       <Image src="/Logotype.svg" width={115} height={23} alt="logotype" />
//       <form action="" className="flex">
//         <input
//           type="text"
//           placeholder="Search for items"
//           className=" md:w-[288px] border border-[#D0D5DD] rounded-md"
//         />
//         <button className="flex p-2 justify-center items-center gap-8 text-white border-t-0 rounded-md border-r-0 border-b-0 border-l-0 border-solid border-1 border-[#870064] bg-[#870064] shadow-xs">
//           Search
//         </button>
//       </form>
//       <HeartIcon className="h-6 w-6" />
//       <ShoppingCartIcon className="h-6 w-6" />
//       <BellIcon className="h-6 w-6" />
//       <img src="/User-Avatar.png" alt="user Avatar" className="w-8 h-8" />
//     </div>
//   );
// }

// export default Header;
