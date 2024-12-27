import React from 'react';
import Poster from '../../Components/Poster/Poster';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-0">
      {/* Poster */}
      <Poster />

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 ml-8 mr-8">
        {/* Card 1 */}
        <div
          className="relative bg-gray-800 text-white rounded-lg shadow-md p-10 text-center flex flex-col justify-end h-80"
          style={{
            backgroundImage: 'url("src/assets/Donate pic.avif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
            <Link to='/Donationblog' className="bg-red-800 text-white inline-block px-6 py-2 rounded hover:bg-gray-700">Donate Now  </Link>
        </div>
        {/* Card 2 */}
        <div
          className="relative bg-gray-800 text-white rounded-lg shadow-md p-10 text-center flex flex-col justify-end h-80"
          style={{
            backgroundImage: 'url("src/assets/pic4.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">Become a Volunteer</h2>
          <Link to='/VolunteerBlog' className="bg-green-800 text-white inline-block px-6 py-2 rounded hover:bg-gray-700">Volunteer Now  </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;