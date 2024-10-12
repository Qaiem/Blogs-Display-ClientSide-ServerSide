import React from "react";

const servicesData = [
  {
    title: "Web Design",
    description: "Creating visually appealing and user-friendly websites.",
    icon: "🌐", // Placeholder for an icon or image
  },
  {
    title: "Graphic Design",
    description: "Designing logos, brochures, and marketing materials.",
    icon: "🎨", // Placeholder for an icon or image
  },
  {
    title: "SEO Services",
    description: "Optimizing your website to rank higher in search engines.",
    icon: "🔍", // Placeholder for an icon or image
  },
  {
    title: "Content Creation",
    description: "Producing high-quality content for blogs and social media.",
    icon: "✍️", // Placeholder for an icon or image
  },
  {
    title: "Digital Marketing",
    description: "Strategies to promote your brand online.",
    icon: "📈", // Placeholder for an icon or image
  },
  {
    title: "E-commerce Solutions",
    description: "Building and managing online stores.",
    icon: "🛒", // Placeholder for an icon or image
  },
];

const Services = () => {
  return (
    <div className="container mx-auto my-8 p-4 sm:p-6 lg:p-8">
      <h2 className="text-4xl font-bold text-center mb-8 mt-5">Our Services</h2>
      <p className="text-center text-gray-700 mb-8">
        At DesignDK, we offer a wide range of services to help you succeed in the digital world. 
        Our team of experts is dedicated to providing top-notch solutions tailored to your needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
