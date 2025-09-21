'use client';

import { useState } from 'react';

interface CreatePetModalProps {
  onClose: () => void;
  onCreatePet: (name: string, concept: string) => void;
  isLoading: boolean;
}

export function CreatePetModal({ onClose, onCreatePet, isLoading }: CreatePetModalProps) {
  const [name, setName] = useState('');
  const [concept, setConcept] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && concept.trim()) {
      onCreatePet(name.trim(), concept.trim());
    }
  };

  const conceptSuggestions = [
    'Magical fox with starry fur',
    'Cyber cat with neon stripes',
    'Rainbow dragon with crystal wings',
    'Crystal wolf with ice powers',
    'Star puppy with cosmic energy'
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-purple-800">Create New Pet</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            disabled={isLoading}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pet Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your pet's name"
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pet Concept
            </label>
            <textarea
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-20 resize-none"
              placeholder="Describe your ideal pet..."
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Quick suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {conceptSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setConcept(suggestion)}
                  className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
                  disabled={isLoading}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn-primary disabled:opacity-50"
              disabled={isLoading || !name.trim() || !concept.trim()}
            >
              {isLoading ? 'Creating...' : 'Create Pet'}
            </button>
          </div>
        </form>

        {isLoading && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 text-purple-600">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
              <span className="text-sm">AI is generating your pet...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
