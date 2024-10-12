import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-10">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <p className="font-medium tracking-wide text-gray-300">Category</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">News</a>
              </li>
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">World</a>
              </li>
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Games</a>
              </li>
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">References</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium tracking-wide text-gray-300">Support</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Help Center</a>
              </li>
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Privacy Policy</a>
              </li>
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Terms of Service</a>
              </li>
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium tracking-wide text-gray-300">About</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Our Story</a>
              </li>
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Careers</a>
              </li>
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium tracking-wide text-gray-300">Follow Us</p>
            <ul className="flex space-x-6 mt-4">
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <FaFacebook size={20} />
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <FaGithub size={20} />
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <FaInstagram size={20} />
                </a>
              </li>
            </ul>

            {/* Subscription Form */}
            <div className="mt-5">
              <h2 className="font-medium tracking-wide text-gray-300">Subscribe to our Newsletter</h2>
              <form className="flex flex-col md:flex-row mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-md border border-gray-600 bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <button
                  type="submit"
                  className="mt-2 md:mt-0 md:ml-4 p-2 bg-orange-500 text-white rounded-md transition-colors duration-300 hover:bg-orange-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-5">
          <p className="text-center text-sm text-gray-500">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
