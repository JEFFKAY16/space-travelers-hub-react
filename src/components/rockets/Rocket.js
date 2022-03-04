import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bookRocket, cancelRocket } from '../../redux/rockets/rockets';

const Rocket = ({ rocket }) => {
  const { reserved } = rocket;
  const dispatch = useDispatch();

  const bookingStatus = () => {
    if (reserved) {
      dispatch(cancelRocket(rocket.rocket_id));
    } else {
      dispatch(bookRocket(rocket.rocket_id));
    }
  };

  return (
    <>
      <div className="container mx-auto mb-6 px-4 flex">
        <img
          src={rocket.flickr_images[0]}
          alt="Rocket"
          className="w-80 mr-9"
        />
        <div>
          <h3 className="text-3xl font-mont font-bold">{rocket.rocket_name}</h3>
          <p className="text-xl pr-4 mt-6 mb-6">
            <span className={reserved
              ? 'bg-blue-500 text-sm text-white px-3 mr-2 rounded'
              : null}
            >
              {reserved ? 'Reserve' : null}
            </span>
            {rocket.description}
          </p>
          <button
            type="button"
            className={reserved
              ? 'bg-gray-200 px-5 py-3 text-2xl text-black font-bold font-inter rounded'
              : 'bg-blue-500 px-5 py-3 text-2xl text-white font-bold font-inter rounded'}
            onClick={bookingStatus}
          >
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </div>
    </>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
