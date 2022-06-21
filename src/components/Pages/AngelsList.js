import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AngelsList = () => (
  <div>
    <div>
      <div className="hero-cover" />
      <div className="hero">
        <h3>MONEY</h3>
        <p>
          Angels are messengers who help you to get in
          touch with God to ask Him for whatever you want.
        </p>
      </div>
    </div>
    <div className="angelsListContainer">
      <Link to="/angelDetails" className="angelsList">
        <div className="angel">
          <h3>LELAHEL</h3>
          <p>Praise God</p>
        </div>
        <BsArrowRight />
      </Link>
      <Link to="/angelDetails" className="angelsList ligth-card">
        <div className="angel">
          <h3>LELAHEL</h3>
          <p>Praise God</p>
        </div>
        <BsArrowRight />
      </Link>
      <Link to="/angelDetails" className="angelsList">
        <div className="angel">
          <h3>LELAHEL</h3>
          <p>Praise God</p>
        </div>
        <BsArrowRight />
      </Link>
      <Link to="/angelDetails" className="angelsList ligth-card">
        <div className="angel">
          <h3>LELAHEL</h3>
          <p>Praise God</p>
        </div>
        <BsArrowRight />
      </Link>
    </div>
  </div>
);

export default AngelsList;
