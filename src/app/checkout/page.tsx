"use client";
import React, { useEffect, useState } from 'react';
import { Product } from "../../../types/products";
import { getCartItems } from '../actions/action';
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from '@/sanity/lib/client';
import Swal from 'sweetalert2'; 

const Checkout = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        city: "",
        phone: "",
        zipcode: "",
    });

    const [formErrors, setFormErrors] = useState({
        firstname: false,
        lastname: false,
        email: false,
        address: false,
        city: false,
        phone: false,
        zipcode: false,
    });

    // Fetch cart items and applied discount on component mount
    useEffect(() => {
        const fetchCartItems = async () => {
            const items = await getCartItems();
            setCartItems(items);
        };
        fetchCartItems();

        const appliedDiscount = localStorage.getItem('appliedDiscount');
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount));
        }
    }, []);

    // Subtotal calculation
    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );
    const total = subtotal - discount;

    // Handle form input changes
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        });
    };

    // Validate form fields
    const validateForm = () => {
        const errors = {
            firstname: !formValues.firstname,
            lastname: !formValues.lastname,
            email: !formValues.email,
            address: !formValues.address,
            city: !formValues.city,
            phone: !formValues.phone,
            zipcode: !formValues.zipcode,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };

    // Handle order placement
    const handlePlaceOrder = async () => {
        if (validateForm()) {
            Swal.fire({
                title: 'Confirm Order',
                text: 'Are you sure you want to place the order?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                confirmButtonColor: "#22202E",
                cancelButtonColor: "#22202E",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    // Proceed with order creation
                    const orderData = {
                        _type: 'order',
                        firstname: formValues.firstname,
                        lastname: formValues.lastname,
                        email: formValues.email,
                        address: formValues.address,
                        city: formValues.city,
                        phone: formValues.phone,
                        zipcode: formValues.zipcode,
                        cartItems: cartItems.map(item => ({
                            _type: 'reference',
                            _ref: item._id,
                        })),
                        subtotal: subtotal,
                        discount: discount,
                        orderDate: new Date().toISOString(),
                    };

                    try {
                        await client.create(orderData);
                        Swal.fire('Order Placed', 'Thank you for your order!', 'success');
                        localStorage.removeItem("appliedDiscount");
                        // Clear the cart and form after placing the order
                        setCartItems([]);
                        setFormValues({
                            firstname: "",
                            lastname: "",
                            email: "",
                            address: "",
                            city: "",
                            phone: "",
                            zipcode: "",
                        });
                    } catch (error) {
                        console.error("Error while creating order", error);
                        Swal.fire('Error', 'Something went wrong with your order.', 'error');
                    }
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire('Cancelled', 'Your order was not placed.', 'info');
                    // Clear the cart and reset form if cancelled
                    setCartItems([]);
                    setFormValues({
                        firstname: "",
                        lastname: "",
                        email: "",
                        address: "",
                        city: "",
                        phone: "",
                        zipcode: "",
                    });
                }
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg flex flex-col md:flex-row gap-8">
            {/* Checkout Form */}
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
                <hr className="mb-4" />

                <h3 className="text-lg font-semibold">Contact Information</h3>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className={`w-full border p-2 rounded mb-3 ${formErrors.email ? 'border-red-500' : ''}`}
                    value={formValues.email}
                    onChange={handleInput}
                />
                <input
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                    className={`w-full border p-2 rounded mb-3 ${formErrors.phone ? 'border-red-500' : ''}`}
                    value={formValues.phone}
                    onChange={handleInput}
                />

                <h3 className="text-lg font-semibold mt-4">Delivery Details</h3>
                <input
                    type="text"
                    id="firstname"
                    placeholder="First Name"
                    className={`w-full border p-2 rounded mb-3 ${formErrors.firstname ? 'border-red-500' : ''}`}
                    value={formValues.firstname}
                    onChange={handleInput}
                />
                <input
                    type="text"
                    id="lastname"
                    placeholder="Last Name"
                    className={`w-full border p-2 rounded mb-3 ${formErrors.lastname ? 'border-red-500' : ''}`}
                    value={formValues.lastname}
                    onChange={handleInput}
                />
                <input
                    type="text"
                    id="address"
                    placeholder="Address"
                    className={`w-full border p-2 rounded mb-3 ${formErrors.address ? 'border-red-500' : ''}`}
                    value={formValues.address}
                    onChange={handleInput}
                />
                <input
                    type="text"
                    id="city"
                    placeholder="City"
                    className={`w-full border p-2 rounded mb-3 ${formErrors.city ? 'border-red-500' : ''}`}
                    value={formValues.city}
                    onChange={handleInput}
                />
                <input
                    type="text"
                    id="zipcode"
                    placeholder="Zipcode"
                    className={`w-full border p-2 rounded mb-3 ${formErrors.zipcode ? 'border-red-500' : ''}`}
                    value={formValues.zipcode}
                    onChange={handleInput}
                />

                <h3 className="text-lg font-semibold mt-4">Payment</h3>
                <div className="border p-2 rounded mb-3">Cash on Delivery</div>

                <button
                    className="w-full bg-[#2A254B] text-white p-2 rounded mt-4"
                    onClick={handlePlaceOrder}
                >
                    Place Order
                </button>
            </div>

            {/* Order Summary */}
            <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                {cartItems.length > 0 && (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item._id} className="flex items-center space-x-4 border-b pb-2 mb-2">
                                {item.image && (
                                    <Image src={urlFor(item.image).url()} alt={item.name} width={50} height={50} className="rounded-md" />
                                )}
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                    <p className="text-sm text-gray-600">Price: £{item.price}</p>
                                </div>
                            </div>
                        ))}
                        <div className="mt-4 border-t pt-4">
                            <p className="font-semibold">Subtotal: £{subtotal.toFixed(2)}</p>
                            <p className="text-red-500">Discount: £{discount.toFixed(2)}</p>
                            <p className="font-bold text-lg">Total: £{(total).toFixed(2)}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
