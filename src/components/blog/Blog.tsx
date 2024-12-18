import React from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
  const blogPosts = [
    {
      title: "Essential Tips for International Travel",
      excerpt: "Navigate international travel like a pro with these essential tips and tricks.",
      date: "March 15, 2024",
      imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
      category: "Travel"
    },
    {
      title: "The Importance of Certified Translations",
      excerpt: "Why certified translations matter for your international business documents.",
      date: "March 10, 2024",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
      category: "Translation"
    },
    {
      title: "Document Legalization Made Simple",
      excerpt: "Understanding the document legalization process for international use.",
      date: "March 5, 2024",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
      category: "Legal"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest articles, tips, and industry insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;