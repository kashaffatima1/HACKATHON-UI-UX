"use client";
import React, { useEffect, useState  } from 'react';
import Image from 'next/image';
import { Product } from '../../../types/products';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import {five} from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const Furniture = () => {

  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchproduct(){
      const fetchedProduct : Product[] = await client.fetch(five)
      setProduct(fetchedProduct)
    }
    fetchproduct()
  },[])

  return (
    <div className="px-4 mt-0 md:px-8 py-12 text-[#2A254B] font-[Clash Display]">
      <h1 className="text-2xl font-semibold mb-8">New Ceramics</h1>
      <div className="md:grid-cols-3 gap-8 grid grid-cols-1 sm:grid-cols-2">
        {product.map((product) => (
          <div key={product._id}>
            <Link href={`./products/${product.slug.current}`}>
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-[80%] object-cover"
              />
            
            <h2 className="text-lg font-bold text-start">{product.name}</h2>
            <p className="mt-2 font-semibold text-start">{`£${product.price}`}</p>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}


export default Furniture;




