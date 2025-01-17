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
        id: 5,
        title: 'The popular suede sofa',
        price: '£980',
        img_url: '/images/image1.jpg',
      },
      {
        id: 6,
        title: 'The Dendy chair',
        price: '£250',
        img_url: '/images/DendyChair.jpg',
      },
      {
        id: 7,
        title: 'The Dandy chair',
        price: '£250',
        img_url: '/images/Chair1.jpg',
      },
]
export default function Popular() {
    return (
        <div className="px-4 mt-0 md:px-8 py-12 text-[#2A254B] font-[Clash Display]">
          <h1 className="text-2xl font-semibold mb-8">Our Popular Products</h1>
          <div className="md:grid-cols-3 gap-8 grid grid-cols-1 sm:grid-cols-2">
            {product.map((data) => {
              return (
                <div key={data.id}>
                  <Link href={`./products/${data.id}`}>
                  <Image
                  src={data.img_url}
                  alt={data.title}
                  width={400}
                  height={400}
                  className="w-full h-[80%] object-cover"
                />
                  </Link>
                  <p className="text-lg font-bold text-start">{data.title}</p>
                  <p className="mt-2 font-semibold text-start">{data.price}</p>
                  </div>
                )
              } 
            )
        }
        
        </div>
        </div>
    )
}