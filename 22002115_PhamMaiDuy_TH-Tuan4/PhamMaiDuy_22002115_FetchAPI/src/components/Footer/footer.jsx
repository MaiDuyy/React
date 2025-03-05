import React from 'react';
import { footer } from '../../config';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          <div className='w-130'>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 mb-4">
              Welcome to our website, a wonderful place to explore and learn how to
              cook like a pro.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-800 px-4 py-2 rounded-l w-full focus:outline-none"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-r transition duration-200">
                Send
              </button>
            </div>

            <div className="pt-26 flex items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">

                <div>
                  <img src="../asset/logofter.png" alt="" />
                </div>
              </div>
              <div className="text-gray-400 text-sm">
                <span>2023 Chefify Company</span>
                <span className="mx-3">|</span>
                <a href="#" className="hover:text-white transition duration-200">
                  Terms of Service
                </a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-white transition duration-200">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <div></div>
          <div></div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                  Our Cooks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                  See Our Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                  FAQ
                </a>
              </li>
              <li className="pt-19">
                <h3 className="text-lg font-semibold mb-2">Shop</h3>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                  Gift Subscription
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Recipes</h3>
            <ul className="space-y-4">
              {footer.map((item) => (
                <li key={item.id}>
                  <a  href="/" className='text-gray-300 hover:text-white transition duration-200'>
                    {item.lable}
                  </a>
                </li>
              ))}



            </ul>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;