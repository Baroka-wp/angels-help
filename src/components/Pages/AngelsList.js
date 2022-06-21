import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Spinner from './Spinner';

const AngelsList = () => {
  const angels = useSelector((state) => state.angels);
  const loading = useSelector((state) => state.loader);
  const location = useLocation();
  const { category } = location.state;
  const angelsList = [...angels].filter((item) => item.category === category);

  return (
    <div data-testid="angels-list">
      {loading && <Spinner />}
      <div>
        <div className="hero-cover" />
        <div className="hero">
          <h3>{category}</h3>
          <p>
            Angels are messengers who help you to get in
            touch with God to ask Him for the&nbsp;
            {category}
            &nbsp;whatever you want.
          </p>
        </div>
      </div>
      <div className="angelsListContainer">
        {
          angelsList.map((angel, index) => (
            <Link
              key={angel.order}
              to="/angels-help/angelsDetails"
              state={{ angel }}
              className={index % 2 === 0 ? 'angelsList ligth-card' : 'angelsList'}
            >
              <div className="angel">
                <h3>{angel.fullName}</h3>
                <em>{angel.definitionOfName}</em>
              </div>
              <FiArrowRightCircle />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default AngelsList;
