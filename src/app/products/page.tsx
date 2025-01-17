import React from "react";
import Image from "next/image";
import Link from "next/link";


interface Iproducts{
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
        img_url: "/images/DendyChair.jpg"
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
]

export default function Products() {
    return (
        <div className="px-4 mt-0 md:px-8 py-12 text-[#2A254B] font-[Clash Display]">
      <h1 className="text-2xl font-semibold mb-8">New Ceramics</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {
            product.map((data) => {
                return (
                    <div key={data.id}>
                         <Link href={`./products/${data.id}`}>
                         <Image
                                      src={data.img_url}
                                      alt={data.title}
                                      width={700}
                                      height={700}
                                      className="w-full h-[80%] object-cover"
                                    />
                                    </Link>
                           <p className="text-lg font-bold text-start">{data.title}</p>
                           <p className="font-semibold mt-2 text-start">{data.price}</p>         
                    </div>
                )
            })
        }
        </div>
      </div>
    )
}
      
