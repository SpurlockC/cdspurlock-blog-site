import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Understanding React and HTML', date: 'Oct 5, 2024' },
  { id: 2, title: 'Using TailwindCSS?', date: 'Oct 5, 2024' },
  { id: 3, title: 'Hosting with Netlify', date: 'Oct 5, 2024' },
];

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">All Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-4">
            <Link to={`/post/${post.id}`} className="text-xl text-blue-600 hover:underline">
              {post.title} - <span>{post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
