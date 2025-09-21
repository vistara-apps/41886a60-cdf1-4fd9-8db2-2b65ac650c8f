'use client';

import { User } from '../lib/types';
import { formatNumber } from '../lib/utils';

interface HeaderProps {
  user: User;
}

export function Header({ user }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 max-w-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">P</span>
            </div>
            <div>
              <h1 className="font-bold text-purple-800 text-sm">PetriVerse AI</h1>
              <p className="text-xs text-gray-600">@{user.telegramUsername}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">⚡</span>
                <span className="text-sm font-medium text-purple-800">
                  {formatNumber(user.currency)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-blue-500">✨</span>
                <span className="text-xs text-gray-600">
                  {formatNumber(user.xp)} XP
                </span>
              </div>
            </div>
            
            <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm">⚙️</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
