import React from 'react';
import HotDealsCard from './cards/HotDealsCard';
import products from '../constant';

function HotDeals() {
  return (
    <div className="lg:max-w-7xl mx-auto px-4 lg:px-0 my-20">
      <div className="flex text-2xl font-semibold gap-1 pb-10">
        <img src="deals/fire.svg" alt="T-shirt" className="w-8 h-8" />
        <h1>Hot Deal Today</h1>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {products.map((product, index) => (
          <HotDealsCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HotDeals;
