import React from 'react';
import { Trophy, Star, Target, Users } from 'lucide-react';

export function Profile() {
  const userStats = {
    bestStreak: 7,
    totalPoints: 450,
    completedChallenges: 23,
    level: 'Novice',
    following: 128,
    followers: 156,
  };

  const achievements = [
    {
      icon: Trophy,
      title: 'First Victory',
      description: 'Complete your first challenge',
      achieved: true,
    },
    {
      icon: Star,
      title: 'Rising Star',
      description: 'Complete 10 challenges',
      achieved: true,
    },
    {
      icon: Target,
      title: 'Fearless',
      description: 'Complete an extreme challenge',
      achieved: false,
    },
    // Add more achievements...
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <div className="flex space-x-4 text-gray-600">
              <span>{userStats.following} Following</span>
              <span>{userStats.followers} Followers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-3xl font-bold text-indigo-600">
            {userStats.bestStreak}
          </div>
          <div className="text-gray-600">Best Streak</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-3xl font-bold text-indigo-600">
            {userStats.totalPoints}
          </div>
          <div className="text-gray-600">Total Points</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-3xl font-bold text-indigo-600">
            {userStats.completedChallenges}
          </div>
          <div className="text-gray-600">Completed</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-3xl font-bold text-indigo-600">{userStats.level}</div>
          <div className="text-gray-600">Level</div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                achievement.achieved
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <achievement.icon
                  size={24}
                  className={achievement.achieved ? 'text-green-500' : 'text-gray-400'}
                />
                <div>
                  <h4 className="font-semibold">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}