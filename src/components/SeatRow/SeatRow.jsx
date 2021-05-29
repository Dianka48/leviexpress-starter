import React from 'react';
import Seat from '../Seat/Seat';

const SeatRow = ({ row, onSeatSelected, selectedSeatNumber }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat
          key={seat.number}
          number={seat.number}
          isOccupied={seat.isOccupied}
          onSelect={onSeatSelected}
          isSelected={seat.number === selectedSeatNumber ? true : false}
        />
      ))}
    </div>
  );
};

export default SeatRow;
