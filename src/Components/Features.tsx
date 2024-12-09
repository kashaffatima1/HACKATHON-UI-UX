//Feature PAGE
import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

const Features = () => {
  return (
    <>
      <section>
        <div className="px-4 md:px-8 py-12 mt:0  text-[#2A254B] mt-12">
          {/* Title */}
          <h1 className="text-center text-xl md:text-2xl font-semibold">
            What makes our brand different
          </h1>

          {/*  ALL Product Div */}
          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
            {/* Product1 */}
            <div className="flex flex-col bg-gray-100 md:w-[25%] p-4 rounded-lg">
              <TbTruckDelivery size={30} className="text-[#2A254B]" />
              <p className="py-4 font-semibold">Next day as standard</p>
              <p>Order before 3pm and get your order the next day as standard.</p>
            </div>

            {/* Product2 */}
            <div className="flex flex-col bg-gray-100 md:w-[25%] p-4 rounded-lg">
              <IoIosCheckmarkCircleOutline size={30} className="text-[#2A254B]" />
              <p className="py-4 font-semibold">Made by true artisans</p>
              <p>Hand-crafted goods made with real passion and craftsmanship.</p>
            </div>

            {/* Product3*/}
            <div className="flex flex-col bg-gray-100 md:w-[25%] p-4 rounded-lg">
              <MdOutlinePriceChange size={30} className="text-[#2A254B]" />
              <p className="py-4 font-semibold">Unbeatable prices</p>
              <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
            </div>

            {/* Product4*/}
            <div className="flex flex-col bg-gray-100 md:w-[25%] p-4 rounded-lg">
              <LuSprout size={30} className="text-[#2A254B]" />
              <p className="py-4 font-semibold">Recycled packaging</p>
              <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
