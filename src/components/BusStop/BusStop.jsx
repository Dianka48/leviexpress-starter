import React, { Fragment } from 'react';
import './style.css';

const BusStop = ({ name, station, time }) => {
  return (
    <Fragment>
      <div className="bus-stop">
        <div className="bus-stop__bullet"></div>
        <div className="bus-stop__place">
          <div className="bus-stop__city">{name}</div>
          <div className="bus-stop__station">{station}</div>
        </div>
        <div className="bus-stop__departure">{time}</div>
      </div>
    </Fragment>
  );
};

export default BusStop;
