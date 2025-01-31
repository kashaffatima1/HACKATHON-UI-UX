"use client";
import { Product } from "../../../types/products";
import React, { useEffect, useState } from "react";
import { getCartItems, removefromcart, updatecart } from "../actions/action";
import Image from "next/image";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import checkout from "../checkout/page";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Fetch cart items on component mount
  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
  }, []);

  // Handle item removal
  const handleRemoveItem = (id: string) => {
    Swal.fire({
      position: "top-right",
      icon: "warning",
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      showCancelButton: true,
      confirmButtonColor: "#22202E",
      cancelButtonColor: "#22202E",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removefromcart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed", "Item has been removed from your cart!", "success");
      }
    });
  };

  // Handle quantity update
  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updatecart(id, quantity);
      setCartItems(getCartItems());
    }
  };

  // Increment quantity
  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.quantity + 1);
    }
  };

  // Decrement quantity
  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity > 1) {
      handleQuantityChange(id, product.quantity - 1);
    }
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const router = useRouter();
  const handleprocessed = () => {
    Swal.fire({
      title: "Processing Your order!",
      text: "Please wait while we process your order.",
      showCancelButton: true,
      confirmButtonText: "Proceed",
      icon: "info",
      confirmButtonColor: "#22202E",
      cancelButtonColor: "#22202E",
})
.then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      "Sucess!",
      "Your order has been processed successfully.",
      "success"
    );
    router.push("/checkout");
    setCartItems([]);
  };
});
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-10 lg:px-40 text-gray-800">
      {/* Header Section */}
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Your Shopping Cart
        </h1>
      </div>

      <div className="space-y-8">
        {/* Product Section */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="bg-white border rounded-lg shadow-md p-4 flex flex-col sm:flex-row justify-between items-center"
            >
              {/* Product Image and Details */}
              <div className="flex items-center space-x-6 w-full sm:w-auto mb-4 sm:mb-0">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    A short product description.
                  </p>
                  <p className="text-base font-semibold mt-2 text-black">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Quantity Section */}
              <div className="text-center mb-4 sm:mb-0">
                <p className="text-sm font-semibold">Quantity</p>
                <div className="flex items-center justify-center mt-2 space-x-4">
                  <p className="text-lg font-medium">{item.quantity}</p>
                </div>
              </div>

              {/* Total Section */}
              <div className="text-center">
                <p className="text-sm font-semibold">Total</p>
                <p className="text-lg font-medium mt-2 text-black">
                  £{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleRemoveItem(item._id)}
                  className="mt-2 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}

        {/* Subtotal and Checkout */}
        {cartItems.length > 0 && (
          <div className="bg-white border rounded-lg shadow-md p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between border-b pb-4">
              <span className="text-lg font-semibold">Subtotal</span>
              <span className="text-lg font-semibold text-black">
                £{subtotal.toFixed(2)}
              </span>
            </div>

            {/* Taxes and Info */}
            <p className="text-sm text-gray-600">
              Taxes and shipping are calculated at checkout.
            </p>

            {/* Checkout Button */}
            <div className="flex justify-end">
            <Link href="/checkout">
              <button className="bg-[#2A254B] text-white px-4 py-2 rounded-md hover:bg-slate-500 transition">
                Go to Checkout
              </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
