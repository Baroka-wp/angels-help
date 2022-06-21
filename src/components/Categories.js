import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { fetchAgels, filterAngels } from '../redux/angels/angels';

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAgels());
  }, []);
  const state = useSelector((state) => state.angels);
  const countAngelsbyCategory = (c) => {
    const temp = [...state].filter((item) => item.category === c);
    return temp.length;
  };
  const filterby = (category) => {
    dispatch(filterAngels(category));
  };

  return (
    <>
      <Link
        to="/angels-help/angelsList"
        name="money"
        onClick={() => filterby('Money')}
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
                {countAngelsbyCategory('Money')}
                &nbsp;Angels
              </p>
            </div>
            <FiArrowRightCircle />
          </div>
        </div>
      </Link>
      <Link
        to="/angels-help/angelsList"
        onClick={() => filterby('Love')}
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
                {countAngelsbyCategory('Love')}
                &nbsp;Angels
              </p>
            </div>
            <FiArrowRightCircle />
          </div>
        </div>
      </Link>
      <Link
        to="/angels-help/angelsList"
        onClick={() => filterby('Job')}
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
                {countAngelsbyCategory('Job')}
                &nbsp;Angels
              </p>
            </div>
            <FiArrowRightCircle />
          </div>
        </div>
      </Link>
      <Link
        to="/angels-help/angelsList"
        onClick={() => filterby('health')}
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
                {countAngelsbyCategory('health')}
                &nbsp;Angels
              </p>
            </div>
            <FiArrowRightCircle />
          </div>
        </div>
      </Link>
      <Link
        to="/angels-help/angelsList"
        onClick={() => filterby('Protection')}
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
                {countAngelsbyCategory('Protection')}
                &nbsp;Angels
              </p>
            </div>
            <FiArrowRightCircle />
          </div>
        </div>
      </Link>
      <Link
        to="/angels-help/angelsList"
        onClick={() => filterby('Spirituality')}
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
                {countAngelsbyCategory('Spirituality')}
                &nbsp;Angels
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
