
import React from "react";
import { DonationData } from "../../Config/DonationData";

const DonationBlog = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 ">
        {DonationData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <img
              src={item.ImageURL}
              alt="Donation"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <p className="text-gray-700 mb-6 text-justify leading-relaxed">
                {item.description}
              </p>
              <a
                href={item.WebsiteURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 text-white px-6 py-3 text-center rounded-lg hover:bg-red-600 transition duration-300"
              >
                Donate Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationBlog;
