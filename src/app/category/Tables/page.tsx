"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from '../../../../types/products';
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const Tablesquery = `
    *[_type == "product" && category->name == "Tables"]{
      _id,
      name,
      price,
      "slug": slug.current,
      "image": image.asset->url
    }
  `;

const TableCategory = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(Tablesquery);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <div className="px-4 mt-0 md:px-8 py-12 text-[#2A254B] font-[Clash Display]">
      <h1 className="text-2xl font-semibold mb-8">Tables</h1>
      <div className="md:grid-cols-3 gap-8 grid grid-cols-1 sm:grid-cols-2">
        {products.map((product) => (
          <div key={product._id}>
            <Link href={`/products/${product.slug}`}>
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-[80%] object-cover"
              />
              <h2 className="text-lg font-bold text-start">{product.name}</h2>
              <p className="mt-2 font-semibold text-start">£{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableCategory;
