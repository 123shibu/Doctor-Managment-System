import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-lg shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

        {/* Contact Info */}
        <div className="mb-8">
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600">+880 1234 567890</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600">support@example.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black cursor-target"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black cursor-target"
            required
          />

          <textarea
            placeholder="Your Message"
            className="w-full p-3 h-28 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black cursor-target"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 cursor-target"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
