import React from 'react';
import { useLocation } from 'react-router-dom';

const AngelsDetails = () => {
  const location = useLocation();
  const { angel } = location.state;
  return (
    <div className="container">
      <div>
        <div className="hero-cover" />
        <div className="hero">
          <h3>
            {angel.fullName}
          </h3>
          <p>&quot;Praise God&quot;</p>
          <br />
          <small>
            {angel.hierarchy}
          </small>
          <br />
          <small>
            {angel.regenceDays}
            /
            {angel.regenceMonth}
          </small>
          <br />
          <small>
            Color :
            {angel.colors}
          </small>
          <br />
          <small>
            scent :
            {angel.scent}
          </small>
        </div>
      </div>
      <div className="DetailsBody">
        <p className="callFormula">
          {angel.callFormula}
          -
          {angel.psalms}
        </p>
        <div className="textCard">
          <h3>Pray</h3>
          <p>
            {angel.invocation}
          </p>
        </div>
        <div className="textCard">
          <h3>Exhortation</h3>
          <p>
            {angel.exhortation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AngelsDetails;
