//PRODUCT PAGE
'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import "../../public/images/Large.jpg";
import "../../public/images/DendyChair.jpg";
import "../../public/images/Lamp (2).jpg"
import ProductItem from './ProductItem';

const Product = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/ProductItem');
  };

  return (
    <>
      <section>
        <div className='px-8 py-12 text-[#2A254B] mt-0'>
          <h1 className='text-2xl font-bold text-center'>Our popular products</h1>

          {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            
            {/* Product 1 */}
            <div className='w-full md:w-[700px] h-auto group flex flex-col items-center'>
              <Image
                src={'/images/Large.jpg'}
                height={800}
                width={800}
                alt='sofa'
                className='w-full h-auto object-cover rounded-lg'
              />
              <div className='mt-4 text-center'>
                <p className='py-2 font-medium'>The popular suede sofa</p>
                <p className='font-semibold'>$980</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className='w-full md:w-[350px] h-auto group flex flex-col items-center'>
              <Image
                src={'/images/DendyChair.jpg'}
                height={800}
                width={800}
                alt='chair'
                className='w-full h-auto object-cover  rounded-lg'
              />
              <div className='mt-4 text-center'>
                <p className='py-2 font-medium'>The Dendy chair</p>
                <p className='font-semibold'>$250</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className='w-full md:w-[350px] h-auto group flex flex-col items-center'>
              <Image
                src={'/images/Lamp (2).jpg'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-auto object-cover rounded-lg'
              />
              <div className='mt-4 text-center'>
                <p className='py-2 font-medium'>The Stylish Lamp</p>
                <p className='font-semibold'>$250</p>
              </div>
            </div>

          </div>

          {/* View Collection Button */}
          <div className='my-10 flex justify-center'>
            <button className='border border-gray-400 py-4 px-6 rounded-md text-[#2A254B] hover:bg-gray-200 transition duration-300' onClick={handleNavigation}>
              View products
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
