import React from 'react';
import { Heart, MessageCircle, Share2, UserPlus } from 'lucide-react';

export function Community() {
  const posts = [
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        level: 'Brave Explorer',
      },
      content:
        'Just completed my first extreme challenge! Asked a CEO for coffee and got a YES! 🎉 Never thought I could do this. #RejectionTherapy',
      likes: 42,
      comments: 12,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
    },
    // Add more posts...
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Community Feed</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="border-b pb-6 last:border-b-0 last:pb-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{post.user.name}</h3>
                    <span className="text-sm text-gray-500">{post.user.level}</span>
                  </div>
                </div>
                <button className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-700">
                  <UserPlus size={20} />
                  <span>Follow</span>
                </button>
              </div>
              <p className="mb-4">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post content"
                  className="rounded-lg mb-4 w-full"
                />
              )}
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
                  <Heart size={20} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-indigo-500">
                  <MessageCircle size={20} />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}