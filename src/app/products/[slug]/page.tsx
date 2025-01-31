"use client";
import { addtocart } from "../../actions/action";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from 'sweetalert2';
import Popular from "../might"; // Import Popular component

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      _type,
      image,
      price,
      description,
      features,
      dimensions,
    }`,
    { slug }
  );
}
const handleaddtocart = (e: React.MouseEvent, product: Product) => {
  e.preventDefault();
  Swal.fire({
    position: "top-right",
    icon: "success",
    title: `${product.name} added to cart`,
    showConfirmButton: false,
    timer: 1000
  });
  addtocart(product);
};

export default function ProductPage({ params }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);

  // Fetch product data
  useEffect(() => {
    getProduct(params.slug).then(setProduct);
  }, [params.slug]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const increment = () => setQuantity((prev: number) => prev + 1);
  const decrement = () => setQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="px-4 lg:px-12 py-8">
      {/* Product Detail Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:h-[600px] gap-8">
        <div className="w-full lg:w-1/2 h-full">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="w-full lg:w-1/2 space-y-6 pt-4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#12131A]">
            {product.name}
          </h2>
          <p className="text-lg lg:text-xl font-semibold text-gray-600">
            £{(product.price * quantity).toFixed(2)}
          </p>

          <div>
            <h1 className="font-semibold text-lg lg:text-xl text-[#2A254B]">
              Description
            </h1>
            <p className="text-[#505977] text-sm lg:text-base mt-2">
              {product.description}
            </p>
          </div>

          <div>
            <ul className="list-disc list-inside space-y-1 text-[#505977]">
              <li>{product.features}</li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-lg lg:text-xl text-[#2A254B]">
              Dimensions
            </h1>
            <p className="text-[#505977] text-sm lg:text-base mt-2">
              {`Height: ${product.dimensions.height}, Width: ${product.dimensions.width}, Depth: ${product.dimensions.depth}`}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-2">
            <div className="flex items-center gap-2">
              <p className="text-sm lg:text-base text-gray-800">Quantity:</p>
              <button
                onClick={decrement}
                className="w-8 h-8 bg-gray-200 text-gray-800 flex items-center justify-center rounded-md"
              >
                -
              </button>
              <span className="text-sm lg:text-base text-gray-800">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="w-8 h-8 bg-gray-200 text-gray-800 flex items-center justify-center rounded-md"
              >
                +
              </button>
            </div>

            <button
              onClick={(e) => handleaddtocart(e, product)}
              className="w-full md:w-[146px] h-[56px] bg-[#4E4D93] text-white rounded-md shadow-md hover:bg-slate-400 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* You might also like Section */}
      <div className="mt-12">
        <Popular />
      </div>
    </div>
  );
}
