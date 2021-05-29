import React, { useEffect, useState, Fragment } from 'react';
import mapImage from './img/map.svg';
import './style.css';

const DateOptions = ({ dates }) => {
  return (
    <Fragment>
      <option value="">Vyberte</option>
      {dates.map((date) => (
        <option key={date.dateBasic} value={date.dateBasic}>
          {date.dateExtended}
        </option>
      ))}
    </Fragment>
  );
};

const CityOptions = ({ cities }) => {
  return (
    <Fragment>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option key={city.code} value={city.code}>
          {city.name}
        </option>
      ))}
    </Fragment>
  );
};

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    )
      .then((response) => response.json())
      .then((data) => onJourneyChange(data.data));
  };

  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/cities')
      .then((response) => response.json())
      .then((data) => setCities(data.data));

    fetch('https://leviexpress-backend.herokuapp.com/api/dates')
      .then((response) => response.json())
      .then((data) => setDates(data.data));
  }, []);

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              onChange={(event) => setFromCity(event.target.value)}
              value={fromCity}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              onChange={(event) => setToCity(event.target.value)}
              value={toCity}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select
              onChange={(event) => setDate(event.target.value)}
              value={date}
            >
              <DateOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              disabled={toCity && fromCity && date ? false : true}
              className="btn"
              type="submit"
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
