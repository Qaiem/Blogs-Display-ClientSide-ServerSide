import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="py-40 bg-gray-100 text-center">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Contact Us
        </h2>
        <p className="text-xl lg:text-2xl mb-8">Let’s Start a Conversation</p>
        {/* The chatbot will appear on the page when Tidio script is loaded */}
      </div>

      {/* Description and Contact Form Section */}
      <div className="container mx-auto my-8 p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
        {/* Left Column - Description */}
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-semibold mb-6">Ask how we can help you:</h3>
          <p className="mb-4">
            See our platform in action. Request a personalized demo of TUNE’s partner marketing platform.
          </p>
          <p className="mb-4">
            Master performance marketing. From TUNE Academy courses to industry research and insights, learn how to grow your business through performance-based marketing.
          </p>
          <p className="mb-4">
            Explore life at TUNE. Search open positions, read about company culture and values, and find your place here.
          </p>

          <h3 className="text-3xl font-semibold mb-6">Points of Contact</h3>
          <p className="mb-4">U.S. TUNE</p>
          <p className="mb-4">11310 McCormick Rd, E1 P1, Suite 200.</p>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:w-1/2 bg-white shadow-lg rounded p-6 mt-[3px]">
          <h3 className="text-3xl font-semibold mb-6 text-center">Contact Form</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your First Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Your Last Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                placeholder="Your Company Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Company Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Company Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                placeholder="Your Job Title"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
