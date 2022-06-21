import React from 'react';
import { Link } from 'react-router-dom';
import {
  GiReceiveMoney,
  GiRoyalLove,
  GiOfficeChair,
  GiHealing,
  GiSecurityGate,
  GiOlive,
} from 'react-icons/gi';

const Categories = () => (
  <>
    <Link to="/angelsList" className="card">
      <div className="sumary">
        <div className="icone">
          <GiReceiveMoney className="card-icone" />
        </div>
        <div className="details">
          <h3>MONEY</h3>
          <p>3 Angels</p>
        </div>
      </div>
    </Link>
    <Link to="/angelsList" className="card ligth-card">
      <div className="sumary">
        <div className="icone">
          <GiRoyalLove className="card-icone" />
        </div>
        <div className="details">
          <h3>LOVE</h3>
          <p>3 Angels</p>
        </div>
      </div>
    </Link>
    <Link to="/angelsList" className="card ligth-card">
      <div className="sumary">
        <div className="icone">
          <GiOfficeChair className="card-icone" />
        </div>
        <div className="details">
          <h3>Job</h3>
          <p>3 Angels</p>
        </div>
      </div>
    </Link>
    <Link to="/angelsList" className="card">
      <div className="sumary">
        <div className="icone">
          <GiHealing className="card-icone" />
        </div>
        <div className="details">
          <h3>HEALTH</h3>
          <p>3 Angels</p>
        </div>
      </div>
    </Link>
    <Link to="/angelsList" className="card">
      <div className="sumary">
        <div className="icone">
          <GiSecurityGate className="card-icone" />
        </div>
        <div className="details">
          <h3>PROTECTION</h3>
          <p>3 Angels</p>
        </div>
      </div>
    </Link>
    <Link to="/angelsList" className="card ligth-card">
      <div className="sumary">
        <div className="icone">
          <GiOlive className="card-icone" />
        </div>
        <div className="details">
          <h3>SPIRITUALITY</h3>
          <p>3 Angels</p>
        </div>
      </div>
    </Link>
  </>
);

export default Categories;
