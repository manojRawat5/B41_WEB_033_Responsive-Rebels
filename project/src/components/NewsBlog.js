import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=800",
    title: "Latest Security Features",
    description: "Discover new ways to protect your community"
  },
  {
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
    title: "Community Success Stories",
    description: "Read how communities thrive with our solutions"
  },
  {
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
    title: "Safety Tips",
    description: "Expert advice for a safer neighborhood"
  }
];

function NewsBlog() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">News and Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
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
  );
}

export default NewsBlog;