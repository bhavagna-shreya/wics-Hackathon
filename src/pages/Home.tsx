import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Star, Target, ArrowRight } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();
  const progress = 35; // Example progress

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center space-y-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <h1 className="text-5xl font-bold text-indigo-600 relative">
          Welcome to Yes Ladder
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto relative">
          Climb your way to confidence, one yes at a time. Transform rejection fear into your superpower through fun, daily challenges.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => navigate('/challenges')}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Start Your Journey</span>
            <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => navigate('/about')}
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-300 border-2 border-indigo-600"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg backdrop-blur-lg bg-white/80">
        <h2 className="text-2xl font-semibold mb-6">Your Progress</h2>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                Level Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-indigo-600">
                {progress}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate('/challenges')}
          className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 space-y-4 text-center transform hover:scale-105 group"
        >
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
            <Target className="text-green-500 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold">Easy Challenges</h3>
          <p className="text-gray-600">Perfect for beginners. Start your journey here!</p>
        </button>

        <button
          onClick={() => navigate('/challenges')}
          className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 space-y-4 text-center transform hover:scale-105 group"
        >
          <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
            <Star className="text-yellow-500 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold">Medium Challenges</h3>
          <p className="text-gray-600">Ready for the next level? Step up your game!</p>
        </button>

        <button
          onClick={() => navigate('/challenges')}
          className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 space-y-4 text-center transform hover:scale-105 group"
        >
          <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
            <Trophy className="text-red-500 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold">Extreme Challenges</h3>
          <p className="text-gray-600">For the brave souls ready to become legends!</p>
        </button>
      </div>
    </div>
  );
}