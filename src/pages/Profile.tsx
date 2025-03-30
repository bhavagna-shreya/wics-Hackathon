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
    currentStreak: 7,
    targetStreak: 30, // max streak goal
  };

  const achievements = [
    {
      image: 'https://cdn-icons-png.flaticon.com/512/2583/2583395.png',
      title: 'First Victory',
      description: 'Complete your first challenge',
      achieved: true,
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      title: 'Rising Star',
      description: 'Complete 10 challenges',
      achieved: true,
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/3468/3468379.png',
      title: 'Fearless',
      description: 'Complete an extreme challenge',
      achieved: false,
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/4151/4151539.png',
      title: 'Community Builder',
      description: 'Gain 100 followers',
      achieved: false,
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/2942/2942833.png',
      title: 'Master Streak',
      description: 'Hit a 30-day streak',
      achieved: false,
    },
  ];

  const progressPercent = Math.min(
    (userStats.currentStreak / userStats.targetStreak) * 100,
    100
  );

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
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

      {/* Stats */}
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

      {/* Current Badge */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold mb-2">🏅 Current Badge</h3>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2583/2583395.png"
          alt="Beginner Badge"
          className="w-24 h-24 mx-auto mb-2"
        />
        <p className="font-medium text-indigo-700">Beginner Badge</p>
        <p className="text-sm text-gray-600 mb-4">You're on your journey. Keep going!</p>

        {/* Streak Progress Bar */}
        <div className="text-sm text-gray-600 mb-1">
          Streak Progress: {userStats.currentStreak}/{userStats.targetStreak} Days
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-indigo-500 h-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Achievements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((badge, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg flex items-center space-x-4 ${
                badge.achieved
                  ? 'bg-green-50 border border-green-400'
                  : 'bg-gray-100 border border-gray-300 opacity-60'
              }`}
            >
              <img
                src={badge.image}
                alt={badge.title}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="font-semibold">{badge.title}</h4>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
