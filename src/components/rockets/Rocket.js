import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bookRocket, cancelRocket } from '../../redux/rockets/rockets';

const Rocket = ({ rocket }) => {
  const { reserved } = rocket;
  const dispatch = useDispatch();

  const rocketBooking = () => {
    dispatch(bookRocket(rocket.rocket_id));
  };

  const rocketCancelling = () => {
    dispatch(cancelRocket(rocket.rocket_id));
  };

  const bookingStatus = () => {
    if (reserved) {
      rocketCancelling();
    } else {
      rocketBooking();
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 flex">
        <img
          src={rocket.flickr_images[0]}
          alt="Rocket"
          className="w-80 mr-9"
        />
        <div>
          <h3>{rocket.rocket_name}</h3>
          <p>
            <span className={reserved ? 'active-badge' : null}>
              {reserved ? 'Reserved' : null}
            </span>
            {rocket.description}
          </p>
          <button
            type="button"
            className={reserved ? 'button-gray' : 'button-primary'}
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
