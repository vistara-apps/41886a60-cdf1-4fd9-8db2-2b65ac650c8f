'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/minikit';
import { PetCard } from '../components/PetCard';
import { ChallengeSection } from '../components/ChallengeSection';
import { CreatePetModal } from '../components/CreatePetModal';
import { CustomizePetModal } from '../components/CustomizePetModal';
import { Header } from '../components/Header';
import { Pet, Challenge, User } from '../lib/types';
import { generatePet, mockChallenges, mockUser } from '../lib/mockData';

export default function Home() {
  const { context } = useMiniKit();
  const [user, setUser] = useState<User>(mockUser);
  const [pets, setPets] = useState<Pet[]>([]);
  const [challenges, setChallenges] = useState<Challenge[]>(mockChallenges);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize with a sample pet if none exist
  useEffect(() => {
    if (pets.length === 0) {
      const samplePet = generatePet(user.userId);
      setPets([samplePet]);
      setSelectedPet(samplePet);
    }
  }, [pets.length, user.userId]);

  const handleCreatePet = async (name: string, concept: string) => {
    setIsLoading(true);
    try {
      // Simulate AI generation delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newPet = generatePet(user.userId, name, concept);
      setPets(prev => [...prev, newPet]);
      setSelectedPet(newPet);
      setShowCreateModal(false);
    } catch (error) {
      console.error('Error creating pet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCustomizePet = (petId: string, newTraits: Record<string, number>) => {
    setPets(prev => prev.map(pet => 
      pet.petId === petId 
        ? { ...pet, traits: { ...pet.traits, ...newTraits } }
        : pet
    ));
    setShowCustomizeModal(false);
  };

  const handleJoinChallenge = (challengeId: string) => {
    if (!selectedPet) return;
    
    setChallenges(prev => prev.map(challenge => 
      challenge.challengeId === challengeId
        ? { 
            ...challenge, 
            participants: [...(challenge.participants || []), selectedPet.petId]
          }
        : challenge
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      <Header user={user} />
      
      <main className="container mx-auto px-4 py-6 max-w-md">
        {/* Pet Display Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-2">
            AI Virtual Pet Care
          </h1>
          
          {selectedPet ? (
            <PetCard 
              pet={selectedPet} 
              variant="displayPet"
              onCustomize={() => setShowCustomizeModal(true)}
            />
          ) : (
            <div className="card text-center py-8">
              <p className="text-gray-600 mb-4">No pets yet!</p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="btn-primary"
              >
                Create Your First Pet
              </button>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-8 justify-center">
          <button
            onClick={() => setShowCreateModal(true)}
            className="btn-accent text-sm"
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Create Pet'}
          </button>
          {selectedPet && (
            <button
              onClick={() => setShowCustomizeModal(true)}
              className="btn-primary text-sm"
            >
              Customize
            </button>
          )}
        </div>

        {/* Challenges Section */}
        <ChallengeSection
          challenges={challenges}
          selectedPet={selectedPet}
          onJoinChallenge={handleJoinChallenge}
        />

        {/* Pet Selection */}
        {pets.length > 1 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Your Pets</h3>
            <div className="grid grid-cols-2 gap-3">
              {pets.map(pet => (
                <PetCard
                  key={pet.petId}
                  pet={pet}
                  variant="compactChallengeEntry"
                  isSelected={selectedPet?.petId === pet.petId}
                  onClick={() => setSelectedPet(pet)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modals */}
      {showCreateModal && (
        <CreatePetModal
          onClose={() => setShowCreateModal(false)}
          onCreatePet={handleCreatePet}
          isLoading={isLoading}
        />
      )}

      {showCustomizeModal && selectedPet && (
        <CustomizePetModal
          pet={selectedPet}
          userCurrency={user.currency}
          onClose={() => setShowCustomizeModal(false)}
          onCustomize={handleCustomizePet}
        />
      )}
    </div>
  );
}
