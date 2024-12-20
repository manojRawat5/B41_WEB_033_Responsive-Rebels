import React from 'react';

export default function NewsBlog() {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f',
      title: 'Local Neighborhoods Embrace New Safety Measures',
      date: 'Mar 15, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19',
      title: 'Technology Leads the Way in Crime Prevention',
      date: 'Mar 12, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1553484771-47a3d14a3d17',
      title: 'Community Watch Program Shows Promising Results',
      date: 'Mar 10, 2024'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">News and Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}