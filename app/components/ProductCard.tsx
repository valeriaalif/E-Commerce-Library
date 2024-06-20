import React from 'react';

const ProductCard = () => {
  return (
    <div className="mx-auto my-4 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-md md:flex-row md:items-start md:text-left">
      <div className="mb-4 md:mr-4 md:mb-0">
        <img className="h-32 w-64 rounded-lg object-cover" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="" />
      </div>
      <div className="">
        <p className="text-md font-medium text-gray-700">James Edward</p>
        <p className="mb-1 text-xs font-medium text-gray-500">Senior Editor</p> 
        <div className="">
          <div className="flex flex-col items-center rounded-xl bg-gray-100 px-2 py-2">
            <p className="mb-1 text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi natus quae ex! Aliquam, ipsa.</p>
          </div>
        </div>
        <div className="flex space-x-2 items-center mt-2">
          <p>
            <span className="text-xl font-bold text-slate-900">$249</span>
  
          </p>
          <a href="#" className="flex items-center rounded-md bg-slate-900 px-2 py-1 text-center text-xs font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
