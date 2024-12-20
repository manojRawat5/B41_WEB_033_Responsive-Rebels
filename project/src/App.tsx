import React from 'react';
import { Users, Shield, BookOpen, Building2, ArrowRight, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-emerald-600" />,
                title: "Sign Up & Join",
                description: "Create your account and join your local community"
              },
              {
                icon: <Users className="w-8 h-8 text-emerald-600" />,
                title: "Connect",
                description: "Meet your neighbors and build relationships"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-emerald-600" />,
                title: "Stay Informed",
                description: "Get real-time updates about your neighborhood"
              },
              {
                icon: <Building2 className="w-8 h-8 text-emerald-600" />,
                title: "Secure Home",
                description: "Enjoy enhanced security and peace of mind"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Good Life Begins With Safe Community</h2>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
              alt="Community gathering"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Enhancing Community Safety Together</h2>
              <p className="text-gray-600 mb-8">
                Our comprehensive security solutions bring neighbors together while keeping
                communities safe and connected.
              </p>
              <div className="space-y-4">
                {[
                  "24/7 Neighborhood Watch",
                  "Real-time Alerts",
                  "Community Forums",
                  "Emergency Response"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="text-emerald-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80"
                alt="Security camera"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
                alt="Security monitoring"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News and Blog */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">News and Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
                title: "Latest Security Features",
                description: "Discover new ways to protect your community"
              },
              {
                image: "https://images.unsplash.com/photo-1577962800631-eb6f11977eb6?auto=format&fit=crop&q=80",
                title: "Community Success Stories",
                description: "Read how communities thrive with our solutions"
              },
              {
                image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
                title: "Safety Tips",
                description: "Expert advice for a safer neighborhood"
              }
            ].map((post, index) => (
              <div key={index} className="group cursor-pointer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.description}</p>
                <div className="flex items-center mt-4 text-emerald-600">
                  <span className="mr-2">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300">
                1234 Security Ave<br />
                Safetown, ST 12345<br />
                contact@example.com<br />
                (555) 123-4567
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l text-black"
                />
                <button className="bg-emerald-600 px-4 py-2 rounded-r hover:bg-emerald-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Community Security. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;