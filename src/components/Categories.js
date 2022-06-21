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
    return { count: angelList.length, angelList };
  };

  return (
    <>
      <Link
        to="/angelsList"
        state={{ angelsList: countAngelsbyCategory('Money').angelList, category: 'Money' }}
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
        to="/angelsList"
        state={{ angelsList: countAngelsbyCategory('Love').angelList, category: 'Love' }}
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
        to="/angelsList"
        state={{ angelsList: countAngelsbyCategory('Job').angelList, category: 'Job' }}
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
        to="/angelsList"
        state={{ angelsList: countAngelsbyCategory('health').angelList, category: 'health' }}
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
        to="/angelsList"
        state={{ angelsList: countAngelsbyCategory('Protection').angelList, category: 'Protection' }}
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
        to="/angelsList"
        state={{ angelsList: countAngelsbyCategory('Spirituality').angelList, category: 'Spirituality' }}
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
