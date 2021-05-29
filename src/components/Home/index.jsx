import React, { useState, Fragment } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import JourneyDetail from '../JourneyDetail/JourneyDetail';
import SeatPicker from '../SeatPicker/SeatPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyDetails) => {
    setJourney(journeyDetails);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && (
        <Fragment>
          <JourneyDetail journey={journey} />
          <SeatPicker seats={journey.seats} journeyId={journey.journeyId} />
        </Fragment>
      )}
    </main>
  );
};
