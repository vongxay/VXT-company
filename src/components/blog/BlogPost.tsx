import React from 'react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

const BlogPost = ({ title, excerpt, date, imageUrl, category }: BlogPostProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-sm text-blue-600 font-medium">{category}</span>
          <span className="mx-2 text-gray-300">•</span>
          <time className="text-sm text-gray-500">{date}</time>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
          Read More →
        </button>
      </div>
    </article>
  );
};

export default BlogPost;