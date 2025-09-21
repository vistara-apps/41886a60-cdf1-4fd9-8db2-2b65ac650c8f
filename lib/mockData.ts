import { Pet, Challenge, User } from './types';

export const mockUser: User = {
  userId: 'user_123',
  telegramUsername: 'petlover',
  petsOwned: [],
  xp: 150,
  currency: 500,
};

export const mockChallenges: Challenge[] = [
  {
    challengeId: 'challenge_1',
    name: 'Community 100 hearts',
    description: 'Complete 5 daily tasks',
    startTime: new Date(),
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    winningCriteria: 'Most hearts collected',
    participants: [],
    icon: '🏠',
    color: 'bg-purple-500',
  },
  {
    challengeId: 'challenge_2',
    name: 'Complete 5 daily tasks',
    description: 'Collect hearts for seven',
    startTime: new Date(),
    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    winningCriteria: 'Most tasks completed',
    participants: [],
    icon: '💎',
    color: 'bg-pink-500',
  },
];

export function generatePet(ownerId: string, name?: string, concept?: string): Pet {
  const petNames = ['Fluffy', 'Sparkle', 'Buddy', 'Luna', 'Max', 'Bella', 'Charlie', 'Mochi'];
  const concepts = ['magical fox', 'cyber cat', 'rainbow dragon', 'crystal wolf', 'star puppy'];
  
  const randomName = name || petNames[Math.floor(Math.random() * petNames.length)];
  const randomConcept = concept || concepts[Math.floor(Math.random() * concepts.length)];
  
  return {
    petId: `pet_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ownerId,
    name: randomName,
    visualDescription: `A cute ${randomConcept} with sparkling eyes and a friendly demeanor`,
    aiGeneratedImageURL: '/api/placeholder/200/200', // Placeholder for AI-generated image
    traits: {
      strength: Math.floor(Math.random() * 50) + 25,
      intelligence: Math.floor(Math.random() * 50) + 25,
      agility: Math.floor(Math.random() * 50) + 25,
      charm: Math.floor(Math.random() * 50) + 25,
      health: Math.floor(Math.random() * 30) + 70,
    },
    abilities: ['Play', 'Learn', 'Explore'],
    level: 1,
    xp: 0,
    createdAt: new Date(),
  };
}

export const traitDescriptions = {
  strength: 'Physical power and endurance',
  intelligence: 'Learning ability and problem-solving',
  agility: 'Speed and reflexes',
  charm: 'Social appeal and charisma',
  health: 'Overall wellness and vitality',
};
