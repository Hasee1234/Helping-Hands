import React from 'react';

const About = () => {
  return (
    <div className="px-4 py-8 bg-gray-200">
      {/* About Section */}
      <section className="text-center mb-12 max-w-3xl mx-auto">
        <p className="text-gray-1000 text-lg leading-relaxed">
          Welcome to our platform, where compassion meets action. We are committed to making a positive impact in the world by 
          empowering individuals to join hands for charity and volunteering. Together, we can create opportunities for 
          underprivileged communities, spread kindness, and bring about lasting change. Whether you're here to donate, 
          volunteer, or simply learn more, your efforts can help build a brighter future for everyone. Let’s make a difference, one step at a time.
        </p>
      </section>

      {/* Cards Section */}
      <section className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg hover:shadow-2xl rounded-lg p-6 max-w-xs text-center transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-200"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Haseeb Mirza</h3>
          <p className="text-gray-600">
            Founder & CEO <br />
            "Driven by a vision of equality and opportunity for all."
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg hover:shadow-2xl rounded-lg p-6 max-w-xs text-center transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-200"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Mariyam Saleem</h3>
          <p className="text-gray-600">
            Chief Technology Officer <br />
            "Innovating solutions to drive impactful change."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
