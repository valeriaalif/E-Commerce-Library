
'use client';
import React from 'react'
import Navbar from '../../components/ProductCard';

import { Responsive, WidthProvider } from "react-grid-layout";
import ProductCard from '../../components/ProductCard';
const ResponsiveGridLayout = WidthProvider(Responsive);

const BookContainer = () => {
  return (
    <div className="relative mt-20 px-4 ">
        <div className="mx-auto text-center">
      <h2 className="capital text-3xl font-bold ">Our Best Selling Books</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
   <ProductCard></ProductCard>
   <ProductCard></ProductCard>
    <ProductCard></ProductCard>
   <ProductCard></ProductCard>
  </div>
  </div>
  )
}

export default BookContainer;
