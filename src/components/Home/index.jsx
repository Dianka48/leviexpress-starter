import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import JourneyDetail from '../JourneyDetail/JourneyDetail';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyDetails) => {
    setJourney(journeyDetails);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <p>Nalezeno spojeni s {journey.journeyId}</p>}
    </main>
  );
};
