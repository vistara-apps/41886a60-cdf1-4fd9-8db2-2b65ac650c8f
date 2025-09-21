'use client';

import { TraitSelectorVariant } from '../lib/types';

interface TraitSelectorProps {
  trait: string;
  currentValue: number;
  originalValue: number;
  onValueChange: (value: number) => void;
  variant: TraitSelectorVariant;
}

export function TraitSelector({
  trait,
  currentValue,
  originalValue,
  onValueChange,
  variant
}: TraitSelectorProps) {
  const maxValue = 100;
  const minValue = 1;

  if (variant === 'toggle') {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => onValueChange(Math.max(minValue, currentValue - 5))}
          className="w-8 h-8 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
          disabled={currentValue <= minValue}
        >
          -
        </button>
        <span className="w-12 text-center font-medium">{currentValue}</span>
        <button
          onClick={() => onValueChange(Math.min(maxValue, currentValue + 5))}
          className="w-8 h-8 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
          disabled={currentValue >= maxValue}
        >
          +
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Min: {minValue}</span>
        <span className={currentValue !== originalValue ? 'font-bold text-purple-600' : ''}>
          Current: {currentValue}
        </span>
        <span>Max: {maxValue}</span>
      </div>
      
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={currentValue}
        onChange={(e) => onValueChange(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        style={{
          background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${((currentValue - minValue) / (maxValue - minValue)) * 100}%, #e5e7eb ${((currentValue - minValue) / (maxValue - minValue)) * 100}%, #e5e7eb 100%)`
        }}
      />
      
      {currentValue !== originalValue && (
        <div className="text-xs text-center">
          <span className={currentValue > originalValue ? 'text-green-600' : 'text-red-600'}>
            {currentValue > originalValue ? '+' : ''}{currentValue - originalValue} from original
          </span>
        </div>
      )}
    </div>
  );
}
