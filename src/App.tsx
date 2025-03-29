import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import PreferencesForm from './components/PreferencesForm';
import Map from './components/Map';
import TourDetails from './components/TourDetails';
import { generateTourItinerary } from './lib/openai';
import type { UserPreferences, Itinerary } from './types';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [itinerary, setItinerary] = useState<Itinerary>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  
  const handlePreferencesSubmit = async (preferences: UserPreferences) => {
    setLoading(true);
    setError(undefined);
    
    try {
      const tourData = await generateTourItinerary(preferences);
      setItinerary(tourData);
    } catch (err) {
      console.error('Error generating tour:', err);
      setError('Failed to generate tour itinerary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {!itinerary ? (
              <>
                <PreferencesForm onSubmit={handlePreferencesSubmit} isLoading={loading} />
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}
              </>
            ) : (
              <TourDetails 
                itinerary={itinerary}
                onSaveTour={() => console.log('Saving tour...')}
                onStartNavigation={() => console.log('Starting navigation...')}
              />
            )}
          </div>
          
          <div className="h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
            <Map
              center={[40.7128, -74.0060]} // Default to NYC
              itinerary={itinerary}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;