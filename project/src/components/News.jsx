import React from 'react';

const newsItems = [
  {
    title: "Latest Security Updates",
    description: "New features to enhance your data protection",
    image: "https://placehold.co/600x400"
  },
  {
    title: "Community Highlights",
    description: "See what our community has been up to",
    image: "https://placehold.co/600x400"
  }
];

export default function News() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">News and Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}