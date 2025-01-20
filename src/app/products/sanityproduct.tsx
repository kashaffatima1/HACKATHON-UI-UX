// Import required libraries and utilities
import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

// Define the product interface
interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Fetch and display products from Sanity
export default async function SanityProduct() {
  // Fetch products using sanityFetch
  const products: IProduct[] = await sanityFetch({ query: allproducts });

  return (
    <div className="px-4 md:px-8 py-12 mt-0 text-[#2A254B] font-[Clash Display] items-center">
      <div className="md:grid-cols-3 gap-8 grid grid-cols-1 sm:grid-cols-2">
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`./products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-[80%] object-cover"
              />
            </Link>
            <h2 className="text-lg font-bold text-start+">{product.name}</h2>
            <p className="mt-2 font-semibold text-start">{`£${product.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
