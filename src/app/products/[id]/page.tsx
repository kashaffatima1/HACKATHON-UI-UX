"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import Products from "../page";

interface Iproducts {
  id: number;
  title: string;
  price: string;
  img_url: string;
}
let product: Iproducts[] = [
  {
    id: 1,
    title: "The Dendy Chair",
    price: "£250",
    img_url: "/images/DendyChair.jpg",
  },
  {
    id: 2,
    title: "Rustic Vase Set",
    price: "£155",
    img_url: "/images/Rustic.jpg",
  },
  {
    id: 3,
    title: "The Silky Vase",
    price: "£125",
    img_url: "/images/Silky.jpg",
  },
  {
    id: 4,
    title: "The Lucky Lamp",
    price: "£399",
    img_url: "/images/Lamp.jpg",
  },
  {
    id: 5,
    title: "The popular suede sofa",
    price: "£980",
    img_url: "/images/image1.jpg",
  },
  {
    id: 6,
    title: "The Dendy chair",
    price: "£250",
    img_url: "/images/DendyChair.jpg",
  },
  {
    id: 7,
    title: "The Dandy chair",
    price: "£250",
    img_url: "/images/Chair1.jpg",
  },
];

export default function Detail() {
  const params = useParams();
  const id = params.id;
  const item = product.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return <h1>Product Not Found</h1>;
  }

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="px-4 lg:px-12 py-8">
      {/* Product Detail Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:h-[600px] gap-8">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 h-full">
          <Image
            src={item.img_url}
            alt={item.title}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-6 pt-4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#12131A]">{item.title}</h2>
          <p className="text-lg lg:text-xl text-[#12131A] font-semibold">{item.price}</p>

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

          {/* Amount and Add to Cart */}
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-2">
            {/* Quantity */}
            <div className="flex items-center gap-2">
              <p className="text-sm lg:text-base text-[#2A254B]">Amount:</p>
              <button
                onClick={decrement}
                className="w-8 h-8 bg-gray-200 text-[#2A254B] flex items-center justify-center rounded-md"
              >
                -
              </button>
              <span className="text-sm lg:text-base text-[#2A254B]">{quantity}</span>
              <button
                onClick={increment}
                className="w-8 h-8 bg-gray-200 text-[#2A254B] flex items-center justify-center rounded-md"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white lg:ml-6">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
