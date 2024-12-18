import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Modern office space"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About VXT</h2>
            <p className="text-gray-600 mb-4">
              VXT is a leading technology services provider specializing in travel solutions,
              language services, and document processing. With years of experience and a
              commitment to excellence, we've helped thousands of clients navigate their
              global business needs.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to simplify complex processes and provide seamless solutions
              for our clients' international business requirements. We combine cutting-edge
              technology with personalized service to deliver outstanding results.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-2xl font-bold text-blue-600">10K+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-600">50+</h4>
                <p className="text-gray-600">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;