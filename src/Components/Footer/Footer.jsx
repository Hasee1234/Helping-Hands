import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-green-800 text-white p-6 mt-auto ">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Website Name Section */}
          <div className="flex flex-col items-start w-full md:w-1/4">
            <h2 className="text-2xl font-bold">Helping Hands</h2>
            <p className="mt-2">
              Giving is not about making a donation, <br /> it's about making a
              difference
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-start w-full md:w-1/4 mt-4 md:mt-0 ">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul>
              <li>
              <Link to='/' className="text-white">Home</Link>
              </li>
              
              <li>
              <Link to='/Donationblog' className="text-white">Blogs</Link>
              </li>
              
              <li>
              <Link to='/VolunteerBlog' className="text-white">Volunteer</Link>
              </li>
              
              <li>
              <Link to='/About' className="text-white">About</Link>
              </li>
              
              <li>
              <Link to='/Contact' className="text-white">Contact</Link>
              </li>
              
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-start w-full md:w-1/4 mt-4 md:mt-0">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <ul>
              <li>
                <a href="tel:+923234360863" className="text-white">
                  +92 3234360863
                </a>
              </li>
              <li>
                <a href="mailto:hasee4499@gmail.com" className="text-white">
                  hasee4499@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col items-start w-full md:w-1/4 mt-4 md:mt-0">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/hasee.mirza.395?mibextid=ZbWKwL"
                  target="blank"
                  className="text-white"
                >
                  <FaFacebookF size={30} />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.instagram.com/hasee_mirza123?igsh=YWlpNmg1OGdwYXBk"
                  target="blank"
                  className="text-white"
                >
                  <FaInstagram size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white-500 pt-4 text-center text-sm">
        © 2024 Helping Hands. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
