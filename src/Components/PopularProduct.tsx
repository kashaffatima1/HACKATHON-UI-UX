'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '../Components/ui/Card'; 

const Product = () => {
  const products = [
    {
      id: '1',
      title: 'The popular suede sofa',
      price: '$980',
      imgURL: '/images/image1.jpg',
    },
    {
      id: '2',
      title: 'The Dendy chair',
      price: '$250',
      imgURL: '/images/DendyChair.jpg',
    },
    {
      id: '3',
      title: 'The Dandy chair',
      price: '$250',
      imgURL: '/images/Chair1.jpg',
    },
  ];

  return (
    <>
      <section>
        <div className="px-8 py-12 text-[#2A254B] font-[Clash Display]">
          <h1 className="text-2xl font-semibold mb-8">Our Popular Products</h1>

          <div className="md:grid-cols-3 gap-8 grid grid-cols-1 sm:grid-cols-2">
            {products.map((product) => (
              <Card
                key={product.id}
                className="flex flex-col items-start space-y-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
              >
                <Image
                  src={product.imgURL}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-[80%] object-cover rounded-t-lg"
                />

                <CardContent className="p-4">
                  <CardTitle className="text-lg font-medium text-start">{product.title}</CardTitle>
                  <p className="text-md font-semibold text-start">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>


          <div className="my-10 flex justify-center">
            <button className="border border-gray-400 py-4 px-6 rounded-md text-[#2A254B] hover:bg-gray-200 transition duration-300">
              View Collection
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
