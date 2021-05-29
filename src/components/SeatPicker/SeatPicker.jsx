import React, { useState } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

import SeatRow from '../SeatRow/SeatRow';

const SeatPicker = ({ seats, journeyId }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleSeatSelect = (number) => {
    setSelectedSeatNumber(number);
  };

  const history = useHistory();

  const handleBuy = () => {
    fetch('https://leviexpress-backend.herokuapp.com/api/reserve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        seat: selectedSeatNumber,
        journeyId: journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => history.push(`/reservation/${data.data.reservationId}`));
  };

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, index) => (
          <SeatRow
            key={index}
            row={row}
            onSeatSelected={handleSeatSelect}
            selectedSeatNumber={selectedSeatNumber}
          />
        ))}
      </div>
      <button
        onClick={handleBuy}
        className="btn"
        type="button"
        disabled={selectedSeatNumber ? false : true}
      >
        Rezervovat
      </button>
    </div>
  );
};

export default SeatPicker;
