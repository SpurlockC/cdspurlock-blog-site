import React from 'react';
import { useParams } from 'react-router-dom';

const posts = {
  1: { title: 'Understanding React and HTML', content: 'This post explains React and HTML...', date: 'Oct 4, 2024' },
  2: { title: 'Using TailwindCSS?', content: 'TailwindCSS is a utility-first CSS framework...', date: 'Oct 3, 2024' },
  3: { title: 'Hosting with Netlify', content: 'Netlify is a powerful platform to deploy websites...', date: 'Oct 2, 2024' }
};

const Post = () => {
  const { id } = useParams();
  const post = posts[id];

  if (!post) return <p>Post not found</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
