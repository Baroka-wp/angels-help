import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import {
  GiReceiveMoney,
  GiRoyalLove,
  GiOfficeChair,
  GiHealing,
  GiSecurityGate,
  GiOlive,
} from 'react-icons/gi';
import { useSelector } from 'react-redux';

const Categories = () => {
  const store = useSelector((state) => state.angels);
  const countAngelsbyCategory = (categoryName) => {
    const angelList = [...store].filter((item) => item.category === categoryName);
    return { count: angelList.length };
  };

  return (
    <>
      <Link
        to="/angels-help/angelsList"
        name="money"
        state={{ category: 'Money' }}
        className="card"
      >
        <div className="sumary">
          <div className="icone">
            <GiReceiveMoney className="card-icone" />
          </div>
          <div className="details">
            <div>
              <h3>Money</h3>
              <p>
                {countAngelsbyCategory('Money').count}
                Angels
              </p>
            </div>
            <FiArrowRightCircle />
          </div>
        </div>
      </Link>
      <Link
        to="/angels-help/angelsList"
        name="love"
        state={{ category: 'Love' }}
        className="card ligth-card"
      >
        <div className="sumary">
          <div className="icone">
            <GiRoyalLove className="card-icone" />
          </div>
          <div className="details">
            <div>
              <h3>Love</h3>
              <p>
                {countAngelsbyCategory('Love').count}
                Angels
              </p>
            </div>
            <FiArrowRightCircle />
          </div>
        </div>
      </Link>
      <Link
        to="/angels-help/angelsList"
        name="job"
        state={{ category: 'Job' }}
        className="card ligth-card"
      >
        <div className="sumary">
          <div className="icone">
            <GiOfficeChair className="card-icone" />
          </div>
          <div className="details">
            <div>
              <h3>Job</h3>
              <p>
                {countAngelsbyCategory('Job').count}
                Angels
              </p>
            </div>
            <FiArrowRightCircle />
          </div>
        </div>
      </Link>
      <Link
        to="/angels-help/angelsList"
        name="health"
        state={{ category: 'health' }}
        className="card"
      >
        <div className="sumary">
          <div className="icone">
            <GiHealing className="card-icone" />
          </div>
          <div className="details">
            <div>
              <h3>Health</h3>
              <p>
                {countAngelsbyCategory('health').count}
                Angels
              </p>
            </div>
            <FiArrowRightCircle />
          </div>
        </div>
      </Link>
      <Link
        to="/angels-help/angelsList"
        name="protection"
        state={{ category: 'Protection' }}
        className="card"
      >
        <div className="sumary">
          <div className="icone">
            <GiSecurityGate className="card-icone" />
          </div>
          <div className="details">
            <div>
              <h3>Protection</h3>
              <p>
                {countAngelsbyCategory('Protection').count}
                Angels
              </p>
            </div>
            <FiArrowRightCircle />
          </div>
        </div>
      </Link>
      <Link
        to="/angels-help/angelsList"
        name="spirituality"
        state={{ category: 'Spirituality' }}
        className="card ligth-card"
      >
        <div className="sumary">
          <div className="icone">
            <GiOlive className="card-icone" />
          </div>
          <div className="details">
            <div>
              <h3>Energy</h3>
              <p>
                {countAngelsbyCategory('Spirituality').count}
                Angels
              </p>
            </div>
            <FiArrowRightCircle />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Categories;
