import React, { useState } from 'react';
import { Card, CardContent, CardTitle } from '../../../Components/ui/Card';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: string;
    description: string;
    dimensions: string;
    imgURL: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedProduct, setSelectedProduct] = useState<null | typeof product>(null);

  return (
    <div className="flex flex-row gap-8">
      {/* Left: Product List */}
      <div className="w-1/2">
        <Card
          onClick={() => setSelectedProduct(product)}
          className="p-4 bg-gray-100 text-gray-800 rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer"
        >
          <CardTitle className="text-lg font-semibold">{product.title}</CardTitle>
          <CardContent className="text-md mt-2">${product.price}</CardContent>
        </Card>
      </div>

      {/* Right: Selected Product Details */}
      {selectedProduct && (
        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 h-auto">
            <Image
              src={selectedProduct.imgURL}
              alt={selectedProduct.title}
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
             
            <h2 className="text-xl md:text-2xl font-semibold">{selectedProduct.title}</h2>
            <p className="py-2 text-lg md:text-xl">${selectedProduct.price}</p>
            <p className="text-[#505977] text-sm md:text-base font-semibold my-4 md:my-6">{selectedProduct.description}</p>
            <p className="flex gap-12 md:gap-20 text-sm md:text-base">Dimensions: {selectedProduct.dimensions}</p>
            <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0">
                      Add to cart
           </button>
           </div>
          </div>
        </div>
      )}
    </div>
  );
}
