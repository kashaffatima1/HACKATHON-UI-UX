"use client";
import React, { useState } from 'react';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);  // State for form submission

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="px-4 py-12 md:px-16 md:py-24">
      {/* Contact Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Contact Form */}
        <div className="flex flex-col justify-between space-y-6">
          <h1 className="text-2xl font-semibold text-[#2A254B]">Get InTouch with us</h1>
          <p className="text-lg text-gray-700">
            We love to hear from you on our customer service, merchandise, website, or any topics you want to share with us. Your comments and suggestions will be appreciated. Please complete the form below.
          </p>

          {submitted ? (
            <div className="text-center text-green-600 font-semibold text-lg">
              <p>Thank you for your message!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  rows={6}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-3 bg-[#2A254B] text-white rounded-md hover:bg-gray-500 transition-colors"
              >
                Submit
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Contact Information */}
        <div className="flex flex-col space-y-6">
          {/* Map */}
          <div className="w-full h-[300px] mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0067507921755!2d-122.06917148468102!3d37.322975379831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbe4505a6e3ff%3A0x947032cc77e5e697!2sStanford%20University!5e0!3m2!1sen!2sus!4v1686979535738!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#2A254B]">Contact Information</h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Address:</strong> 3500 Tracy, CA, USA
              </li>
              <li>
                <strong>Phone:</strong> +86 79658515270
              </li>
              <li>
                <strong>Email:</strong> Avion@furniture.com
              </li>
              <li>
                <strong>Working Hours:</strong> Everyday 9:00 AM - 6:30 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
