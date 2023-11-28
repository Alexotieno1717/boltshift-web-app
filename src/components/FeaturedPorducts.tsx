import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Countdown from 'react-countdown';

function FeaturedPorducts() {
  return (
    <div className="lg:max-w-7xl mx-auto px-4 lg:px-0 my-20">
      <div className="flex text-2xl font-semibold gap-1 pb-10">
        <img src="Clipboard.svg" alt="T-shirt" className="w-8 h-8" />
        <h1>Featured Products</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-full border border-gray-200 rounded-md flex flex-col">
          <img src="featured/Product_Image.png" alt="products" className="w-full rounded-md" />
          <div className="flex flex-col items-center pt-12 px-3">
            <h1 className="truncate-1-lines text-sm font-normal">
              Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood
            </h1>
            <p className="text-xl font-semibold text-[#870064] pb-5">Ksh. 92,372</p>
            <div className="pb-2">
              <div className="flex justify-center text-xl font-normal space-x-3">
                <div className="flex flex-col items-center rounded-sm p-1 bg-[#330025] text-white">365</div> &nbsp;{' '}
                {' : '}
                <div className="flex flex-col items-center rounded-sm p-1 bg-[#330025] text-white">23</div> &nbsp;
                {' : '}
                <div className="flex flex-col items-center rounded-sm p-1 bg-[#330025] text-white">59</div> &nbsp;
                {' : '}
                <div className="flex flex-col items-center rounded-sm p-1 bg-[#330025] text-white">59</div>
              </div>
              {/* <div className="flex justify-center text-xs font-normal  space-x-3">
                <div className="flex flex-col items-center">days </div>
                <div className="flex flex-col items-center">Hrs</div>
                <div className="flex flex-col items-center">Min</div>
                <div className="flex flex-col"> Sec: </div>
              </div> */}
            </div>
            <div className="pb-2">
              <Countdown date={Date.now() + 10000} />
            </div>
            <button className="w-full text-white px-[14px] py-2  text-sm font-normal justify-center rounded-lg bg-[#66004B] border border-gray-300 shadow-sm mb-3">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="w-full border border-gray-200 rounded-md flex flex-col">
          <img src="featured/Product_Image3.png" alt="products" className="w-full rounded-md" />
          <div className="flex flex-col items-center pt-12 px-3">
            <h1 className="truncate-1-lines text-sm font-normal">
              Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood
            </h1>
            <p className="text-xl font-semibold text-[#870064] pb-5">Ksh. 92,372</p>
            <div className="pb-2">
              <div className="flex justify-center text-xl font-normal space-x-3">
                <div className="flex flex-col items-center rounded-sm p-1 bg-[#330025] text-white">365</div> &nbsp;{' '}
                {' : '}
                <div className="flex flex-col items-center rounded-sm p-1 bg-[#330025] text-white">23</div> &nbsp;
                {' : '}
                <div className="flex flex-col items-center rounded-sm p-1 bg-[#330025] text-white">59</div> &nbsp;
                {' : '}
                <div className="flex flex-col items-center rounded-sm p-1 bg-[#330025] text-white">59</div>
              </div>
              {/* <div className="flex justify-center text-xs font-normal  space-x-3">
                <div className="flex flex-col items-center">days </div>
                <div className="flex flex-col items-center">Hrs</div>
                <div className="flex flex-col items-center">Min</div>
                <div className="flex flex-col"> Sec: </div>
              </div> */}
            </div>
            <div className="pb-2">
              <Countdown date={Date.now() + 10000} />
            </div>
            <button className="w-full text-white px-[14px] py-2  text-sm font-normal justify-center rounded-lg bg-[#66004B] border border-gray-300 shadow-sm mb-3">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full flex flex-col relative border border-[#EAECF0] rounded-md hover:border-[#870064]/50 hover:shadow-lg ease-in-out duration-700">
              <img src="deals/Product_Image.png" alt="T-shirt" className="relative rounded-md w-full" />
              <HeartIcon className="absolute top-0 right-0  w-8 h-8 m-2 flex-shrink-0 bg-white text-[#66004B] rounded-full p-2 hover:text-red-500" />
              <div className="px-3 pt-4 pb-3">
                <p className="truncate-1-lines text-xs font-medium pt-3">
                  Mercer41 Annemargaret 90.5 Round Arm Sofa Polyester/Polyester Blend in Blue, Size 34.5 H x 90.5 W x
                  35.5 D in | Wayfair
                </p>
                <p className="text-[#870064] text-xs font-normal">Kshs. 99</p>
                <div className="flex space-x-1 items-center">
                  <div className="h-1 relative w-full rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-[#870064]/20 absolute "></div>
                    <div className=" h-full bg-[#870064] absolute" style={{ width: 40 }}></div>
                  </div>
                  <img src="deals/fire.svg" alt="T-shirt" className="w-5 h-5" />
                  <p className="text-[#870064] text-xs font-normal text-center flex-shrink-0">34 left</p>
                </div>
                <button className="flex mx-auto px-[14px] py-2  text-xs font-normal justify-center rounded-lg bg-white border border-gray-300 shadow-sm mt-2">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-full flex flex-col relative border border-[#EAECF0] rounded-md hover:border-[#870064]/50 hover:shadow-lg ease-in-out duration-700">
              <img src="deals/Product_Image.png" alt="T-shirt" className="relative rounded-md w-full" />
              <HeartIcon className="absolute top-0 right-0  w-8 h-8 m-2 flex-shrink-0 bg-white text-[#66004B] rounded-full p-2 hover:text-red-500" />
              <div className="px-3 pt-4 pb-3">
                <p className="truncate-1-lines text-xs font-medium pt-3">
                  Mercer41 Annemargaret 90.5 Round Arm Sofa Polyester/Polyester Blend in Blue, Size 34.5 H x 90.5 W x
                  35.5 D in | Wayfair
                </p>
                <p className="text-[#870064] text-xs font-normal">Kshs. 99</p>
                <div className="flex space-x-1 items-center">
                  <div className="h-1 relative w-full rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-[#870064]/20 absolute "></div>
                    <div className=" h-full bg-[#870064] absolute" style={{ width: 40 }}></div>
                  </div>
                  <img src="deals/fire.svg" alt="T-shirt" className="w-5 h-5" />
                  <p className="text-[#870064] text-xs font-normal text-center flex-shrink-0">34 left</p>
                </div>
                <button className="flex mx-auto px-[14px] py-2  text-xs font-normal justify-center rounded-lg bg-white border border-gray-300 shadow-sm mt-2">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-full flex flex-col relative border border-[#EAECF0] rounded-md hover:border-[#870064]/50 hover:shadow-lg ease-in-out duration-700">
              <img src="deals/Product_Image.png" alt="T-shirt" className="relative rounded-md w-full" />
              <HeartIcon className="absolute top-0 right-0  w-8 h-8 m-2 flex-shrink-0 bg-white text-[#66004B] rounded-full p-2 hover:text-red-500" />
              <div className="px-3 pt-4 pb-3">
                <p className="truncate-1-lines text-xs font-medium pt-3">
                  Mercer41 Annemargaret 90.5 Round Arm Sofa Polyester/Polyester Blend in Blue, Size 34.5 H x 90.5 W x
                  35.5 D in | Wayfair
                </p>
                <p className="text-[#870064] text-xs font-normal">Kshs. 99</p>
                <div className="flex space-x-1 items-center">
                  <div className="h-1 relative w-full rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-[#870064]/20 absolute "></div>
                    <div className=" h-full bg-[#870064] absolute" style={{ width: 40 }}></div>
                  </div>
                  <img src="deals/fire.svg" alt="T-shirt" className="w-5 h-5" />
                  <p className="text-[#870064] text-xs font-normal text-center flex-shrink-0">34 left</p>
                </div>
                <button className="flex mx-auto px-[14px] py-2  text-xs font-normal justify-center rounded-lg bg-white border border-gray-300 shadow-sm mt-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-4">
              <div className="w-full flex flex-col relative border border-[#EAECF0] rounded-md hover:border-[#870064]/50 hover:shadow-lg ease-in-out duration-700">
                <img src="deals/Product_Image.png" alt="T-shirt" className="relative rounded-md w-full h-auto" />
                <HeartIcon className="absolute top-0 right-0  w-8 h-8 m-2 flex-shrink-0 bg-white text-[#66004B] rounded-full p-2 hover:text-red-500" />
                <div className="px-3 pt-4 pb-3">
                  <p className="truncate-1-lines text-xs font-medium pt-3">
                    Mercer41 Annemargaret 90.5 Round Arm Sofa Polyester/Polyester Blend in Blue, Size 34.5 H x 90.5 W x
                    35.5 D in | Wayfair
                  </p>
                  <p className="text-[#870064] text-xs font-normal">Kshs. 99</p>
                  <div className="flex space-x-1 items-center">
                    <div className="h-1 relative w-full rounded-full overflow-hidden">
                      <div className=" w-full h-full bg-[#870064]/20 absolute "></div>
                      <div className=" h-full bg-[#870064] absolute" style={{ width: 40 }}></div>
                    </div>
                    <img src="deals/fire.svg" alt="T-shirt" className="w-5 h-5" />
                    <p className="text-[#870064] text-xs font-normal text-center flex-shrink-0">34 left</p>
                  </div>
                  <button className="flex mx-auto px-[14px] py-2  text-xs font-normal justify-center rounded-lg bg-white border border-gray-300 shadow-sm mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <div className="w-full flex flex-col relative border border-[#EAECF0] rounded-md hover:border-[#870064]/50 hover:shadow-lg ease-in-out duration-700">
                <img src="featured/Product_Image2.png" alt="T-shirt" className="relative rounded-md w-full" />
                <HeartIcon className="absolute top-0 right-0  w-8 h-8 m-2 flex-shrink-0 bg-white text-[#66004B] rounded-full p-2 hover:text-red-500" />
                <div className="px-3 pt-4 pb-3">
                  <p className="truncate-1-lines text-xs font-medium pt-3">
                    Mercer41 Annemargaret 90.5 Round Arm Sofa Polyester/Polyester Blend in Blue, Size 34.5 H x 90.5 W x
                    35.5 D in | Wayfair
                  </p>
                  <p className="text-[#870064] text-xs font-normal">Kshs. 99</p>
                  <div className="flex space-x-1 items-center">
                    <div className="h-1 relative w-full rounded-full overflow-hidden">
                      <div className=" w-full h-full bg-[#870064]/20 absolute "></div>
                      <div className=" h-full bg-[#870064] absolute" style={{ width: 40 }}></div>
                    </div>
                    <img src="deals/fire.svg" alt="T-shirt" className="w-5 h-5" />
                    <p className="text-[#870064] text-xs font-normal text-center flex-shrink-0">34 left</p>
                  </div>
                  <button className="flex mx-auto px-[14px] py-2  text-xs font-normal justify-center rounded-lg bg-white border border-gray-300 shadow-sm mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {products.slice(0, 3).map((product, index) => (
        <HotDealsCard key={index} product={product} />
      ))} */}
    </div>
  );
}

export default FeaturedPorducts;
