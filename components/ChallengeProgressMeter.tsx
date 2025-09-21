'use client';

import { Challenge, ChallengeProgressVariant } from '../lib/types';

interface ChallengeProgressMeterProps {
  challenge: Challenge;
  variant: ChallengeProgressVariant;
}

export function ChallengeProgressMeter({ 
  challenge, 
  variant 
}: ChallengeProgressMeterProps) {
  // Mock progress calculation
  const progress = Math.random() * 100;
  const participants = challenge.participants?.length || 0;
  
  const progressBarClass = variant === 'primary' 
    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
    : 'bg-gradient-to-r from-blue-500 to-cyan-500';

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Progress</span>
        <span className="font-medium text-purple-800">{Math.round(progress)}%</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${progressBarClass}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-500">
        <span>{participants} participants</span>
        <span>{challenge.winningCriteria}</span>
      </div>
    </div>
  );
}
