import React from 'react';

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Support</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        We’re here to help! Whether you have a question about your order, our products, or anything else, the EcoRoots team is ready to assist you.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-2">📞 Contact Us</h2>
          <p className="text-gray-700">
            Email: <a href="mailto:support@ecoroots.com" className="text-blue-600 underline">support@ecoroots.com</a>
          </p>
          <p className="text-gray-700">
            Phone: <a href="tel:+1234567890" className="text-blue-600 underline">+1 (234) 567-890</a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-2">📦 Order & Shipping</h2>
          <p className="text-gray-700">
            You can check your order status and shipping updates from your profile dashboard. For questions about delivery or returns, visit our <span className="font-medium text-blue-600 underline">FAQ</span> page.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-2">💬 Live Chat</h2>
          <p className="text-gray-700">
            Need quick help? Use our live chat available at the bottom-right corner of the site during our business hours: <br />
            <span className="italic">Sunday - Thursday: 9 AM – 6 PM</span>
          </p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        Thank you for supporting sustainability with EcoRoots 🌱
      </p>
    </div>
  );
};

export default Support;
