import React, { useState } from 'react';
import { ShoppingCart, Coffee, Phone, MessageCircle } from 'lucide-react';
import { BackgroundMedia } from '../src/assets/Videos/BackgroundMedia;

const challenges = {
  easy: [
    { icon: ShoppingCart, title: 'Ask for a grocery divider', points: 10 },
    { icon: Coffee, title: 'Ask for a free coffee sample', points: 15 },
    { icon: Phone, title: 'Call a stranger and compliment them', points: 20 },
    { icon: MessageCircle, title: 'Start a conversation with someone in line', points: 25 },
  ],
  medium: [
    { icon: ShoppingCart, title: 'Negotiate a discount at a retail store', points: 30 },
    { icon: Coffee, title: 'Ask to join strangers for coffee', points: 35 },
    { icon: Phone, title: 'Ask for a job interview on the spot', points: 40 },
    { icon: MessageCircle, title: 'Give a public speech in a busy area', points: 45 },
  ],
  extreme: [
    { icon: ShoppingCart, title: 'Start a dance party in a public place', points: 50 },
    { icon: Coffee, title: 'Propose to a stranger (as a joke)', points: 55 },
    { icon: Phone, title: 'Pitch a business idea to a CEO', points: 60 },
    { icon: MessageCircle, title: 'Perform a stand-up routine in public', points: 65 },
  ],
};

export function Challenges() {
  const [difficulty, setDifficulty] = useState('easy');

  return (
    <div className="relative min-h-screen">
      <BackgroundMedia 
        videoUrl="/src/assets/Videos/202503291935.mp4"
        audioUrl="https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
      />
      <div className="relative z-10 space-y-8 max-w-4xl mx-auto pt-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setDifficulty('easy')}
            className={`px-6 py-2 rounded-full ${
              difficulty === 'easy'
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-600 hover:bg-green-100'
            }`}
          >
            Easy
          </button>
          <button
            onClick={() => setDifficulty('medium')}
            className={`px-6 py-2 rounded-full ${
              difficulty === 'medium'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-gray-600 hover:bg-yellow-100'
            }`}
          >
            Medium
          </button>
          <button
            onClick={() => setDifficulty('extreme')}
            className={`px-6 py-2 rounded-full ${
              difficulty === 'extreme'
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-600 hover:bg-red-100'
            }`}
          >
            Extreme
          </button>
        </div>

        <div className="space-y-4">
          {challenges[difficulty].map((challenge, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow flex items-center justify-between hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <challenge.icon
                  size={24}
                  className={
                    difficulty === 'easy'
                      ? 'text-green-500'
                      : difficulty === 'medium'
                      ? 'text-yellow-500'
                      : 'text-red-500'
                  }
                />
                <span className="text-lg">{challenge.title}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-bold text-indigo-600">{challenge.points} pts</span>
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                  Complete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}