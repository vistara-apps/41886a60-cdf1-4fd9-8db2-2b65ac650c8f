'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center">
      <div className="card text-center max-w-md mx-4">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          Your virtual pets are safe, but we encountered an error.
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
