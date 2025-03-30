import React from 'react';
import { Lightbulb, Heart, Target, Trophy } from 'lucide-react';

export function About() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-indigo-600">About Yes Ladder</h1>
        <p className="text-xl text-gray-600">
          Transforming fear into opportunity, one challenge at a time
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Yes Ladder was born from a simple idea: what if we could transform the fear of rejection 
            into a game of growth? We believe that every "no" brings you closer to a "yes," and 
            every challenge you face builds your confidence ladder, one rung at a time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Lightbulb className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <p className="text-gray-600">
            To help people overcome their fear of rejection through gamified challenges, 
            building confidence and resilience in a supportive community.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-red-100 rounded-full">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold">Our Values</h3>
          </div>
          <p className="text-gray-600">
            We believe in courage, authenticity, and the power of community support 
            to help each other grow and succeed.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-600">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Target className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">Take on Challenges</h3>
            </div>
            <p className="text-gray-600">
              Choose from our curated list of challenges, ranging from easy to extreme. 
              Each challenge is designed to push your comfort zone gradually.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Trophy className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">Track Your Progress</h3>
            </div>
            <p className="text-gray-600">
              Earn points, unlock achievements, and watch your confidence grow as you 
              complete more challenges and inspire others in the community.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-6">
          Join thousands of others who are transforming their lives through the power of Yes Ladder.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
          Get Started Today
        </button>
      </div>
    </div>
  );
}