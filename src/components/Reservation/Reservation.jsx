import React, { useEffect, useState, Fragment } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';

const Reservation = () => {
  const [reservation, setReservation] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/reservation?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setReservation(data.data);
      });
  }, []);

  return (
    <Fragment>
      {reservation && (
        <div className="reservation container">
          <h2>Vaše e-jízdenka č. {reservation.reservationId}</h2>
          <div className="reservation__body">
            <div className="reservation__headings">
              <p>Datum cesty:</p>
              <p>Odjezd:</p>
              <p>Příjezd:</p>
              <p>Sedadlo:</p>
            </div>
            <div className="reservation__info">
              <p>{reservation.date}</p>
              <p>
                {reservation.fromCity.name}, {reservation.fromCity.time}
              </p>
              <p>
                {reservation.toCity.name}, {reservation.toCity.time}
              </p>
              <p>{reservation.seatNumber}</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Reservation;
