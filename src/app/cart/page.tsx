"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartslice";  // Import actions
import { RootState } from "../redux/store";
import increaseQuantity from "../redux/cartslice";
import decreaseQuantity from "../redux/cartslice";
import Image from "next/image";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
          cartItems.map((item: CartItem) => (
            <div
              key={item.id}
              className="bg-white border rounded-lg shadow-md p-4 flex justify-between items-center"
            >
              {/* Product Image and Details */}
              <div className="flex items-center space-x-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    A short product description.
                  </p>
                  <p className="text-base font-semibold mt-2">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Quantity Section */}
              <div className="text-center">
                <p className="text-sm font-semibold">Quantity</p>
                <div className="flex items-center justify-center mt-2 space-x-4">
                  
                  <p className="text-lg font-medium">{item.quantity}</p>
                </div>
              </div>

              {/* Total Section */}
              <div className="text-center">
                <p className="text-sm font-semibold">Total</p>
                <p className="text-lg font-medium mt-2">
                  £{(item.price * item.quantity).toFixed(2)}
                </p>
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
              <span className="text-lg font-semibold">£{subtotal.toFixed(2)}</span>
            </div>

            {/* Taxes and Info */}
            <p className="text-sm text-gray-600">
              Taxes and shipping are calculated at checkout.
            </p>

            {/* Checkout Button */}
            <div className="flex justify-end">
              <button className="bg-[#2A254B] text-white px-4 py-2 rounded-md hover:bg-slate-500 transition">
                Go to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
