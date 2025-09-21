'use client';

import { Challenge, Pet } from '../lib/types';
import { ChallengeProgressMeter } from './ChallengeProgressMeter';

interface ChallengeSectionProps {
  challenges: Challenge[];
  selectedPet: Pet | null;
  onJoinChallenge: (challengeId: string) => void;
}

export function ChallengeSection({ 
  challenges, 
  selectedPet, 
  onJoinChallenge 
}: ChallengeSectionProps) {
  return (
    <div className="space-y-6">
      {/* Challenge Buttons */}
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-4">Community care challenges</p>
        <div className="flex flex-wrap gap-2 justify-center">
          <button className="challenge-button bg-orange-500 text-white">
            ❤️ Feed
          </button>
          <button className="challenge-button bg-cyan-500 text-white">
            🎮 Play
          </button>
          <button className="challenge-button bg-blue-500 text-white">
            💙 Caring
          </button>
          <button className="challenge-button bg-green-500 text-white">
            🏆 All Challenges
          </button>
        </div>
      </div>

      {/* Active Challenges */}
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div key={challenge.challengeId} className="card">
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-10 h-10 ${challenge.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                {challenge.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-purple-800">{challenge.name}</h3>
                <p className="text-sm text-gray-600">{challenge.description}</p>
              </div>
            </div>
            
            <ChallengeProgressMeter
              challenge={challenge}
              variant="primary"
            />
            
            <div className="mt-3 flex justify-between items-center">
              <div className="text-xs text-gray-500">
                Ends: {challenge.endTime.toLocaleDateString()}
              </div>
              <button
                onClick={() => onJoinChallenge(challenge.challengeId)}
                disabled={!selectedPet || challenge.participants?.includes(selectedPet.petId)}
                className="btn-primary text-xs disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {challenge.participants?.includes(selectedPet?.petId || '') ? 'Joined' : 'Join'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
