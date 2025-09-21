'use client';

import { useState } from 'react';
import { Pet } from '../lib/types';
import { TraitSelector } from './TraitSelector';
import { getTraitIcon, getTraitColor } from '../lib/utils';
import { traitDescriptions } from '../lib/mockData';

interface CustomizePetModalProps {
  pet: Pet;
  userCurrency: number;
  onClose: () => void;
  onCustomize: (petId: string, newTraits: Record<string, number>) => void;
}

export function CustomizePetModal({ 
  pet, 
  userCurrency, 
  onClose, 
  onCustomize 
}: CustomizePetModalProps) {
  const [modifiedTraits, setModifiedTraits] = useState(pet.traits);
  const [totalCost, setTotalCost] = useState(0);

  const TRAIT_COST_PER_POINT = 10;

  const handleTraitChange = (traitName: string, newValue: number) => {
    const oldValue = pet.traits[traitName as keyof typeof pet.traits];
    const difference = newValue - oldValue;
    const cost = Math.abs(difference) * TRAIT_COST_PER_POINT;
    
    setModifiedTraits(prev => ({
      ...prev,
      [traitName]: newValue
    }));

    // Recalculate total cost
    const newCost = Object.entries(modifiedTraits).reduce((total, [trait, value]) => {
      const originalValue = pet.traits[trait as keyof typeof pet.traits];
      const diff = Math.abs(value - originalValue);
      return total + (diff * TRAIT_COST_PER_POINT);
    }, 0);
    
    setTotalCost(newCost);
  };

  const handleSave = () => {
    if (totalCost <= userCurrency) {
      onCustomize(pet.petId, modifiedTraits);
    }
  };

  const canAfford = totalCost <= userCurrency;
  const hasChanges = JSON.stringify(modifiedTraits) !== JSON.stringify(pet.traits);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-purple-800">Customize {pet.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {/* Current Stats */}
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="font-semibold text-purple-800 mb-2">Current Stats</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(pet.traits).map(([trait, value]) => (
                <div key={trait} className="flex items-center gap-2">
                  <span>{getTraitIcon(trait)}</span>
                  <span className="capitalize">{trait}:</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trait Customization */}
          <div className="space-y-4">
            <h3 className="font-semibold text-purple-800">Adjust Traits</h3>
            {Object.entries(modifiedTraits).map(([trait, value]) => (
              <div key={trait}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{getTraitIcon(trait)}</span>
                  <span className="font-medium capitalize">{trait}</span>
                  <span className={`text-sm ${getTraitColor(trait)}`}>({value})</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">
                  {traitDescriptions[trait as keyof typeof traitDescriptions]}
                </p>
                <TraitSelector
                  trait={trait}
                  currentValue={value}
                  originalValue={pet.traits[trait as keyof typeof pet.traits]}
                  onValueChange={(newValue) => handleTraitChange(trait, newValue)}
                  variant="slider"
                />
              </div>
            ))}
          </div>

          {/* Cost Summary */}
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Cost:</span>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⚡</span>
                <span className={`font-bold ${canAfford ? 'text-green-600' : 'text-red-600'}`}>
                  {totalCost}
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Your balance: ⚡{userCurrency}
            </div>
            {!canAfford && (
              <p className="text-red-600 text-sm mt-2">
                Insufficient energy! Reduce modifications or earn more energy.
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!canAfford || !hasChanges}
              className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
