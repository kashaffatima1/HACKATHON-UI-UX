"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartslice";

interface Iproducts {
  id: number;
  title: string;
  price: number;
  image: string;
}

const product: Iproducts[] = [
  {
    id: 1,
    title: "The Dendy Chair",
    price: 250,
    image: "/images/DendyChair.jpg",
  },
  {
    id: 2,
    title: "Rustic Vase Set",
    price: 155,
    image: "/images/Rustic.jpg",
  },
  {
    id: 3,
    title: "The Silky Vase",
    price: 125,
    image: "/images/Silky.jpg",
  },
  {
    id: 4,
    title: "The Lucky Lamp",
    price: 399,
    image: "/images/Lamp.jpg",
  },
  {
    id: 5,
    title: "The Popular Suede Sofa",
    price: 980,
    image: "/images/image1.jpg",
  },
  {
    id: 6,
    title: "The Dendy Chair",
    price: 250,
    image: "/images/DendyChair.jpg",
  },
  {
    id: 7,
    title: "The Dandy Chair",
    price: 250,
    image: "/images/Chair1.jpg",
  },
];

export default function Detail() {
  const params = useParams();
  const id = params.id; // Extract product ID from the URL
  const item = product.find((product) => product.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  if (!item) {
    return <h1 className="text-center text-xl font-semibold mt-20">Product Not Found</h1>;
  }

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch(
      add({
        id: item.id,
        title: item.title,
        price: item.price, // Use item price directly
        image: item.image, // Correct property name
        quantity, // Add quantity to match CartItem type
      })
    );
  };

  return (
    <div className="px-4 lg:px-12 py-8">
      {/* Product Detail Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:h-[600px] gap-8">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 h-full">
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-6 pt-4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#12131A]">{item.title}</h2>
          <p className="text-lg lg:text-xl font-semibold text-gray-600">
            £{(item.price * quantity).toFixed(2)}
          </p>

         {/* Description */}
         <div>
            <h1 className="font-semibold text-lg lg:text-xl text-[#2A254B]">Description</h1>
            <p className="text-[#505977] text-sm lg:text-base mt-2">
              Experience the elegance and functionality of our {item.title}. Designed to bring style and sophistication
              to your space, this versatile piece is perfect for any home or office setting.
            </p>
          </div>
          {/* Features */}
          <div>
            <ul className="list-disc list-inside space-y-1 text-[#505977]">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>
           {/* Dimensions */}
           <div>
            <h1 className="font-semibold text-lg lg:text-xl text-[#2A254B]">Dimensions</h1>
            <div className="flex gap-8 mt-2 text-sm lg:text-base text-[#505977] ">
              <div>
                <h1>Height</h1>
                <p>110cm</p>
              </div>
              <div>
                <h1>Width</h1>
                <p>75cm</p>
              </div>
              <div>
                <h1>Depth</h1>
                <p>50cm</p>
              </div>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-2">
            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <p className="text-sm lg:text-base text-gray-800">Quantity:</p>
              <button
                onClick={decrement}
                className="w-8 h-8 bg-gray-200 text-gray-800 flex items-center justify-center rounded-md"
              >
                -
              </button>
              <span className="text-sm lg:text-base text-gray-800">{quantity}</span>
              <button
                onClick={increment}
                className="w-8 h-8 bg-gray-200 text-gray-800 flex items-center justify-center rounded-md"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full md:w-[146px] h-[56px] bg-[#4E4D93] text-white rounded-md shadow-md hover:bg-slate-400 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
