export interface User {
  userId: string;
  telegramUsername: string;
  petsOwned: string[];
  xp: number;
  currency: number;
}

export interface Pet {
  petId: string;
  ownerId: string;
  name: string;
  visualDescription: string;
  aiGeneratedImageURL: string;
  traits: {
    strength: number;
    intelligence: number;
    agility: number;
    charm: number;
    health: number;
  };
  abilities: string[];
  level: number;
  xp: number;
  createdAt: Date;
}

export interface Challenge {
  challengeId: string;
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  winningCriteria: string;
  results?: PetParticipation[];
  participants?: string[];
  icon: string;
  color: string;
}

export interface PetParticipation {
  participationId: string;
  petId: string;
  challengeId: string;
  score: number;
  rank: number;
}

export type PetCardVariant = 'displayPet' | 'compactChallengeEntry';
export type TraitSelectorVariant = 'toggle' | 'slider';
export type ChallengeProgressVariant = 'primary' | 'secondary';
export type ActionButtonVariant = 'createPet' | 'customize' | 'joinChallenge';
