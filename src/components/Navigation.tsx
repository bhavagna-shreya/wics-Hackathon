import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Target, Users, User, Info } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-xl font-bold text-indigo-600 flex items-center space-x-2">
            <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=50&h=50&fit=crop" alt="Logo" className="w-8 h-8 rounded-full" />
            <span>Yes Ladder</span>
          </NavLink>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-600 scale-105'
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`
              }
            >
              <Home size={20} />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/challenges"
              className={({ isActive }) =>
                `flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-600 scale-105'
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`
              }
            >
              <Target size={20} />
              <span>Challenges</span>
            </NavLink>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                `flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-600 scale-105'
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`
              }
            >
              <Users size={20} />
              <span>Community</span>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-600 scale-105'
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`
              }
            >
              <User size={20} />
              <span>Profile</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-600 scale-105'
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`
              }
            >
              <Info size={20} />
              <span>About</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}