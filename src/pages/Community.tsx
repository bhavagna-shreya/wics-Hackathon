import React from 'react';
import { Heart, MessageCircle, Share2, UserPlus, PencilLine } from 'lucide-react';

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
    {
      id: 2,
      user: {
        name: 'Daniel Kim',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        level: 'Fearless Challenger',
      },
      content:
        'Today I sang loudly in a supermarket. Got a few weird looks but I OWNED it! 🎤 #confidence',
      likes: 30,
      comments: 5,
      image: '',
    },
    {
      id: 3,
      user: {
        name: 'Alicia Gomez',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        level: 'Bold Beginner',
      },
      content:
        'Asked a stranger about their favorite book in the park. Ended up talking for an hour. So cool! 📚',
      likes: 18,
      comments: 4,
      image: '',
    },
    {
      id: 4,
      user: {
        name: 'Liam Patel',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        level: 'Extreme Adventurer',
      },
      content:
        'Started a random dance in the city square — a few joined in 😎💃 #FlashMobAttempt',
      likes: 56,
      comments: 20,
      image: 'https://images.unsplash.com/photo-1558981403-c5f9891c66c5',
    },
    {
      id: 5,
      user: {
        name: 'Maya Chen',
        avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
        level: 'Shy No More',
      },
      content:
        'Left notes of encouragement in books at the library today 📖❤️ #KindnessMatters',
      likes: 22,
      comments: 3,
      image: '',
    },
  ];

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        {/* Start a Post */}
        <div className="bg-white rounded-lg p-4 shadow flex items-center gap-4">
          <PencilLine className="text-gray-500" />
          <input
            type="text"
            placeholder="Start a post..."
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Scrollable Feed */}
        <div className="bg-white rounded-lg p-6 shadow-lg max-h-[600px] overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Community Feed</h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.user.avatar}
                      alt={post.user.name}
                      className="w-10 h-10 rounded-full object-cover"
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
    </div>
  );
}
