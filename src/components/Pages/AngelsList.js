import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const AngelsList = () => {
  const angelsList = useSelector((state) => state.angels);
  let categoryName = 'Angel';
  if (angelsList.length > 0) {
    categoryName = [...angelsList][0].category;
  }
  const loading = useSelector((state) => state.loader);

  return (
    <div data-testid="angels-list">
      {loading && <Spinner />}
      <div>
        <div className="hero-cover" />
        <div className="hero">
          <h3>{categoryName}</h3>
          <p>
            Angels are messengers who help you to get in
            touch with God to ask Him for the&nbsp;
            {categoryName}
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
