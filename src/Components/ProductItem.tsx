//PRODUCT ITEM PAGE
import Image from 'next/image';
import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import "../../public/images/Image Left.jpg"
import "../../public/images/DendyChair.jpg"
import "../../public/images/Rustic.jpg"
import "../../public/images/Lamp.jpg"
import "../../public/images/Silky.jpg"

const ProductListing = () => {
  const features = [
    {
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard.',
      icon: TbTruckDelivery,
    },
    {
      title: 'Made by true artisans',
      description: 'Hand-crafted goods made with real passion and craftsmanship.',
      icon: IoIosCheckmarkCircleOutline,
    },
    {
      title: 'Unbeatable prices',
      description: 'For our material and quality, you won’t find better prices anywhere.',
      icon: MdOutlinePriceChange,
    },
    {
      title: 'Recycled packaging',
      description: 'We use 100% recycled packaging to ensure our footprint is manageable.',
      icon: LuSprout,
    },
  ];

  return (
    <>
      <section>
        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
          {/* Main Product Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 h-auto">
              <Image
                src={'/images/Image Left.jpg'}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
              <div>
                <p className="text-xl md:text-2xl font-semibold">The Dandy Chair</p>
                <p className="py-2 text-lg md:text-xl">$250</p>
              </div>
              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold">Description</h1>
                <div className="my-4 md:my-6">
                  <p>
                    A timeless design, with premium materials features as one of our most popular
                    and iconic pieces. The dandy chair is perfect for any stylish living space with
                    beech legs and lambskin leather upholstery.
                  </p>
                </div>
                <div className="ml-4">
                  <ul className="list-disc space-y-1">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div>
                  <div className="my-8">
                    <h1 className="font-semibold">Dimensions</h1>
                  </div>
                  <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                    <div  className='border border-gray-100'>
                      <h1 className='border border-gray-100'>Height</h1>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h1  className='border border-gray-100'>Width</h1>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h1 className='border border-gray-100'>Depth</h1>
                      <p>50cm</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center mt-8">
                    <div className="flex items-center gap-4 border border-gray-400">
                      <h1>Amount:</h1>
                      <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2 ">
                        <span className='border border-gray-400'>+</span> 1 <span className='border border-gray-400'>-</span>
                      </button>
                    </div>
                    <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="px-4 mt-0 md:px-8 py-12 text-[#2A254B]">
            {/* Title */}
            <h1 className="text-2xl font-semibold text-center">New Ceramics</h1>

            {/* Product Items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {/* Product 1 */}
              <div className="w-full h-auto flex flex-col items-center">
                <Image
                  src={'/images/DendyChair.jpg'}
                  height={700}
                  width={700}
                  alt="DEndyChair"
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 rounded-lg"
                />
                <div className="mt-4 text-center">
                  <p className="py-2 font-medium">The Dendy Chair</p>
                  <p className="font-semibold">$250</p>
                </div>
              </div>

              {/* Product 2 */}
              <div className="w-full h-auto flex flex-col items-center">
                <Image
                  src={'/images/Rustic.jpg'}
                  height={700}
                  width={700}
                  alt="vase"
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 rounded-lg"
                />
                <div className="mt-4 text-center">
                  <p className="py-2 font-medium">Rustic Vase Set</p>
                  <p className="font-semibold">$155</p>
                </div>
              </div>

              {/* Product 3 */}
              <div className="w-full h-auto flex flex-col items-center">
                <Image
                  src={'/images/Silky.jpg'}
                  height={700}
                  width={700}
                  alt="silky vase"
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 rounded-lg"
                />
                <div className="mt-4 text-center">
                  <p className="py-2 font-medium">The Silky Vase</p>
                  <p className="font-semibold">$125</p>
                </div>
              </div>

              {/* Product 4 */}
              <div className="w-full h-auto flex flex-col items-center">
                <Image
                  src={'/images/Lamp.jpg'}
                  height={700}
                  width={700}
                  alt="lamp"
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 rounded-lg"
                />
                <div className="mt-4 text-center">
                  <p className="py-2 font-medium">The Lucky Lamp</p>
                  <p className="font-semibold">$399</p>
                </div>
              </div>
            </div>

            {/* View Collection Button */}
            <div className="my-10 flex justify-center">
            <button className=" border bg-gray-100 py-3 px-6 rounded-md text-[#2A254B]">
              View collection
            </button>
          </div>
          </div>
          

          

          {/* Features Section */}
          <div className="flex flex-col md:flex-row gap-6 mt-12 text-sm md:text-base">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex flex-col md:w-1/4 p-4 rounded-lg">
                  <Icon size={30} className="text-[#2A254B]" />
                  <p className="py-4 font-semibold">{feature.title}</p>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListing;