'use client';

import { Pet, PetCardVariant } from '../lib/types';
import { getTraitIcon, getTraitColor, calculatePetScore } from '../lib/utils';
import { cn } from '../lib/utils';

interface PetCardProps {
  pet: Pet;
  variant: PetCardVariant;
  isSelected?: boolean;
  onClick?: () => void;
  onCustomize?: () => void;
}

export function PetCard({ 
  pet, 
  variant, 
  isSelected = false, 
  onClick, 
  onCustomize 
}: PetCardProps) {
  if (variant === 'compactChallengeEntry') {
    return (
      <div
        className={cn(
          'pet-card cursor-pointer transition-all duration-200 hover:scale-105',
          isSelected && 'ring-2 ring-purple-500'
        )}
        onClick={onClick}
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center animate-bounce-slow">
            <span className="text-2xl">🦊</span>
          </div>
          <h3 className="font-semibold text-purple-800 text-sm">{pet.name}</h3>
          <p className="text-xs text-gray-600">Level {pet.level}</p>
          <div className="text-xs text-purple-600 mt-1">
            Score: {calculatePetScore(pet)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pet-card text-center">
      {/* Pet Avatar */}
      <div className="relative mb-4">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg">
          <span className="text-6xl">🦊</span>
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-4 bg-blue-400/30 rounded-full animate-pulse-slow"></div>
        </div>
      </div>

      {/* Pet Info */}
      <h2 className="text-2xl font-bold text-purple-800 mb-2">{pet.name}</h2>
      <p className="text-sm text-gray-600 mb-4">{pet.visualDescription}</p>
      
      {/* Level and XP */}
      <div className="flex justify-center items-center gap-4 mb-4">
        <div className="text-center">
          <div className="text-lg font-bold text-purple-600">Level {pet.level}</div>
          <div className="text-xs text-gray-500">{pet.xp} XP</div>
        </div>
      </div>

      {/* Traits */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {Object.entries(pet.traits).map(([trait, value]) => (
          <div key={trait} className="text-center">
            <div className="text-lg mb-1">{getTraitIcon(trait)}</div>
            <div className={cn('text-sm font-medium', getTraitColor(trait))}>
              {value}
            </div>
            <div className="text-xs text-gray-500 capitalize">{trait}</div>
          </div>
        ))}
      </div>

      {/* Abilities */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {pet.abilities.map((ability, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
          >
            {ability}
          </span>
        ))}
      </div>

      {/* Action Button */}
      {onCustomize && (
        <button
          onClick={onCustomize}
          className="btn-primary text-sm"
        >
          Customize Pet
        </button>
      )}
    </div>
  );
}
