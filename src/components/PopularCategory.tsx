import React from 'react';

function PopularCategory() {
  return (
    <div className="lg:max-w-7xl mx-auto px-4 lg:px-0 my-20">
      <div className="flex text-2xl font-semibold gap-1 pb-10">
        <img src="popular/Shopping.svg" alt="T-shirt" className="w-8 h-8" />
        <h1>Popular Categories</h1>
      </div>
      <div className="grid grid-cols-7 gap-4">
        <div className="w-40 border border-[#EAECF0] rounded-md px-8 text-center py-[25px] flex flex-col items-center">
          <img src="popular/T-shirt.svg" alt="T-shirt" />
          <p className="text-xs font-medium pt-3">Men Clothes</p>
        </div>
        <div className="w-40 border border-[#EAECF0] px-8 rounded-md py-[25px] flex flex-col items-center">
          <img src="popular/Dress.svg" alt="T-shirt" />
          <p className="text-xs font-medium pt-3">Women Clothing</p>
        </div>
        <div className="w-40 border border-[#EAECF0] px-8 rounded-md py-[25px] flex flex-col items-center">
          <img src="popular/Watch.svg" alt="T-shirt" />
          <p className="text-xs font-medium pt-3">Watches</p>
        </div>
        <div className="w-40 border border-[#EAECF0] px-8 rounded-md py-[25px] flex flex-col items-center">
          <img src="popular/plate.svg" alt="T-shirt" />
          <p className="text-xs font-medium pt-3">Home Appliance</p>
        </div>
        <div className="w-40 border border-[#EAECF0] px-8 rounded-md py-[25px] flex flex-col items-center">
          <img src="popular/ball.svg" alt="T-shirt" />
          <p className="text-xs font-medium pt-3">Sport & Outdoor</p>
        </div>
        <div className="w-40 border border-[#EAECF0] px-8 rounded-md py-[25px] flex flex-col items-center">
          <img src="popular/Books.svg" alt="T-shirt" />
          <p className="text-xs font-medium pt-3">Books & Stationery</p>
        </div>
        <div className="w-40 border border-[#EAECF0] px-8 rounded-md py-[25px] flex flex-col items-center">
          <img src="popular/Shallow pan of food.svg" alt="T-shirt" />
          <p className="text-xs font-medium pt-3">Home & Living</p>
        </div>
      </div>
    </div>
  );
}

export default PopularCategory;
