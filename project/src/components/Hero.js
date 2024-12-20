import React from 'react';

function Hero() {
  return (
    <section className="bg-emerald-950 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Do?</h2>
            <p className="text-gray-300 leading-relaxed">
              We deliver advanced monitoring solutions for neighborhoods,
              empowering communities with cutting-edge technology. Our mission is
              to create safer, more connected spaces where everyone can thrive
              together.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Security monitoring center"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;