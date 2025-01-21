import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  dimensions: string;
  features: string;
  quantity: number;
  tags: string[];
  image: string;
}

export default async function TablewareCategoryPage() {
  // Query to fetch only products in the "Tableware" category
  const query = `
    *[_type == "product" && category->name == "Tableware"]{
      _id,
      name,
      description,
      price,
      dimensions,
      features,
      quantity,
      tags,
      "image": image.asset->url
    }
  `;

  // Fetch products directly from the client
  const products: Product[] = await client.fetch(query);

  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg font-semibold">
          No tableware found.
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 mt-0 md:px-8 py-12 text-[#2A254B] font-[Clash Display]">
      <h1 className="text-2xl font-semibold mb-8">Tableware</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className=" bg-white"
          >
            <Link href={`./products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-[80%] object-cover"
              />
            </Link>
            <p className="text-lg font-bold text-start">
              {product.name}
            </p>
            <p className="font-semibold mt-2 text-start">£{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
