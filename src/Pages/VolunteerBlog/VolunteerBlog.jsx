
import React from "react";
import { VolunteerData } from "../../Config/VolunteerData";
const VolunteerBlog = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {VolunteerData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <img
              src={item.imageURL}
              alt="Volunteer"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <p className="text-gray-700 mb-6 text-justify leading-relaxed">
                {item.description}
              </p>
              <a
                href={item.websiteURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-3 text-center rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Volunteer Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerBlog;
