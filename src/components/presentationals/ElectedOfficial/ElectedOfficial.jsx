import React from 'react';

const ElectedGovItem = () => {
  return (
    <div>
      <img
        src="resources/img/bello.jpg"
        alt="Governor 1"
        className="governors__img"
      />

      <div className="governors__details">
        <h4 className="heading-4 heading-4--light">Yahaya Bello</h4>
        <p className="state__won">Kogi State</p>
        <p className="party__won">APC</p>
      </div>
    </div>
  );
};

export default ElectedGovItem;
