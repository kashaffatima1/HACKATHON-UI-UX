import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../Components/ui/Card"; 

export default function Ceramic() {
  const posts = [
    {
      id: "1",
      title: "The Dendy Chair",
      description:
        "A modern, minimalist chair design that offers both comfort and style. Perfect for any living space or office setup.",
      price: "$250",
      imgURL: "/images/DendyChair.jpg",
    },
    {
      id: "2",
      title: "Rustic Vase Set",
      description:
        "An elegant set of rustic vases, ideal for adding a touch of vintage charm to your home decor.",
      price: "$155",
      imgURL: "/images/Rustic.jpg",
    },
    {
      id: "3",
      title: "The Silky Vase",
      description:
        "A sleek and smooth vase design that embodies modern elegance and timeless simplicity.",
      price: "$125",
      imgURL: "/images/Silky.jpg",
    },
    {
      id: "4",
      title: "The Lucky Lamp",
      description:
        "A stylish and functional lamp that provides warm lighting, creating a cozy atmosphere in any room.",
      price: "$399",
      imgURL: "/images/Lamp.jpg",
    },
  ];

  return (
    <div className="px-4 mt-0 md:px-8 py-12 text-[#2A254B] font-[Clash Display]">
      <h1 className="text-2xl font-semibold mb-8">New Ceramics</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out">
            <Image
              src={post.imgURL}
              alt={post.title}
              width={700}
              height={700}
              className="w-full h-[80%] object-cover rounded-t-lg"
            />
            <CardContent className="p-4">
              <CardTitle className="text-lg font-bold text-start">{post.title}</CardTitle>
              <p className="font-semibold mt-2 text-start">{post.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center p-4">
              <a
                className="px-6 py-2 text-sm font-medium rounded transition-colors bg-gray-600 text-white"
              >
                View Collection
              </a>
       </div>
       </div>
  );
}
