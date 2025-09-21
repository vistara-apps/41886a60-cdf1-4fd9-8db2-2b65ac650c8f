import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function calculatePetScore(pet: any): number {
  const { traits } = pet;
  return Object.values(traits).reduce((sum: number, value: any) => sum + value, 0);
}

export function getTraitColor(traitName: string): string {
  const colors = {
    strength: 'text-red-600',
    intelligence: 'text-blue-600',
    agility: 'text-green-600',
    charm: 'text-pink-600',
    health: 'text-purple-600',
  };
  return colors[traitName as keyof typeof colors] || 'text-gray-600';
}

export function getTraitIcon(traitName: string): string {
  const icons = {
    strength: '💪',
    intelligence: '🧠',
    agility: '⚡',
    charm: '✨',
    health: '❤️',
  };
  return icons[traitName as keyof typeof icons] || '📊';
}
