"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartslice";
import { product as ProductType } from "@/sanity/schemaTypes/product";

interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  dimensions: string;
  features: string;
  quantity: number;
  tags: string[];
}

const staticProducts: IProduct[] = [
  {
    id: "1",
    name: "The Dendy Chair",
    price: 250,
    image: "/images/DendyChair.jpg",
    description: "Static product description.",
    dimensions: "Static dimensions",
    features: "Static features",
    quantity: 1,
    tags: ["Static"],
  },
  {
    id: "2",
    name: "Rustic Vase Set",
    price: 155,
    image: "/images/Rustic.jpg",
    description: "Static product description.",
    dimensions: "Static dimensions",
    features: "Static features",
    quantity: 1,
    tags: ["Static"],
  },
  {
    id: "3",
    name: "The Silky Vase",
    price: 125,
    image: "/images/Silky.jpg",
    description: "Static product description.",
    dimensions: "Static dimensions",
    features: "Static features",
    quantity: 1,
    tags: ["Static"],
  },
  {
    id: "4",
    name: "The Lucky Lamp",
    price: 399,
    image: "/images/Lamp.jpg",
    description: "Static product description.",
    dimensions: "Static dimensions",
    features: "Static features",
    quantity: 1,
    tags: ["Static"],
  },
  {
    id: "5",
    name: "The Popular Suede Sofa",
    price: 980,
    image: "/images/image1.jpg",
    description: "Static product description.",
    dimensions: "Static dimensions",
    features: "Static features",
    quantity: 1,
    tags: ["Static"],
  },
];

const ProductDetails = ({ productId }: { productId: string }) => {
  const [result, setResult] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch product details on server side using the provided `id`
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          _id,
          name,
          description,
          price,
          dimensions,
          features,
          quantity,
          tags,
          "image": image.asset->url
        }`;
        const sanityProducts = await client.fetch(query);
        const fetchedProduct = sanityProducts.find((item: IProduct) => item.id === productId); // Use _id to match

        setResult(fetchedProduct || null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productId]);

  // Return loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Return product not found if result is null
  if (!result) {
    return <div>Product not found</div>;
  }

  const product = result; // Now using the correct product state

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch(
      add({
        id: product.id,
        title: product.name,
        price: product.price,
        image: product.image,
        quantity,
      })
    );
  };

  return (
    <div className="px-4 lg:px-12 py-8">
      {/* Product Detail Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:h-[600px] gap-8">
        <div className="w-full lg:w-1/2 h-full">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
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
    {Array.isArray(product.features) ? (
      product.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))
    ) : (
      <li>{product.features}</li> // If features is a string, display it directly
    )}
  </ul>
</div>


          <div>
            <h1 className="font-semibold text-lg lg:text-xl text-[#2A254B]">
              Dimensions
            </h1>
            <p className="text-[#505977] text-sm lg:text-base mt-2">
              {product.dimensions}
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
};

export default ProductDetails;
