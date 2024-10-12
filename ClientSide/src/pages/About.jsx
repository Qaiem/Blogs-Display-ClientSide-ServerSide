import React from "react";

const About = () => {
  return (
    <div className="container mx-auto my-8 p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded">
      <h1 className="text-3xl font-bold mb-6 text-center mt-5">About Us</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Left Column */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-800 text-base leading-relaxed mb-4">
            Welcome to DesignDK! We are a passionate team of writers and designers dedicated to sharing our knowledge and experiences in the world of design, creativity, and technology. Our journey began with a shared love for art and innovation, and we aim to inspire others through our content.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-800 text-base leading-relaxed mb-4">
            At DesignDK, our mission is to provide valuable insights, tips, and resources for aspiring designers, developers, and anyone interested in the creative industry. We believe in the power of sharing knowledge and fostering a community of learners and creators.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc ml-5 mb-4">
            <li className="text-gray-800 text-base leading-relaxed">Creativity: We encourage innovative thinking and unique perspectives.</li>
            <li className="text-gray-800 text-base leading-relaxed">Community: We believe in supporting and uplifting one another.</li>
            <li className="text-gray-800 text-base leading-relaxed">Integrity: We strive to provide honest and accurate information.</li>
            <li className="text-gray-800 text-base leading-relaxed">Growth: We are committed to continuous learning and improvement.</li>
          </ul>

          {/* Vision and Future Goals */}
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-800 text-base leading-relaxed mb-4">
            Our vision is to become a leading resource in the design community, empowering individuals with the knowledge and tools needed to excel in their creative endeavors. We aim to foster a culture of innovation and collaboration that transcends boundaries.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Future Goals</h2>
          <ul className="list-disc ml-5 mb-4">
            <li className="text-gray-800 text-base leading-relaxed">Expand our content to include more interactive learning experiences and tutorials.</li>
            <li className="text-gray-800 text-base leading-relaxed">Build a community platform for designers to share their work and receive feedback.</li>
            <li className="text-gray-800 text-base leading-relaxed">Collaborate with industry leaders to offer webinars and workshops.</li>
            <li className="text-gray-800 text-base leading-relaxed">Launch a mentorship program connecting aspiring designers with experienced professionals.</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>

          {/* Team Member 1 */}
          <div className="bg-gray-100 p-4 rounded mb-4 flex items-center">
            <img
              src="./src/assets/user-03.png" // Replace with the actual path to John's image
              alt="John Doe"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-700">Founder & Lead Designer</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-100 p-4 rounded mb-4 flex items-center">
            <img
              src="./src/assets/user-02.png" // Replace with the actual path to Jane's image
              alt="Jane Smith"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-700">Content Writer & Editor</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-100 p-4 rounded mb-4 flex items-center">
            <img
              src="./src/assets/user-01.png" // Replace with the actual path to Alice's image
              alt="Alice Johnson"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-bold">Alice Johnson</h3>
              <p className="text-gray-700">Marketing Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
