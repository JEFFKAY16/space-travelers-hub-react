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
      <h2>{rocket.rocket_id}</h2>
      <h3>{rocket.rocket_name}</h3>
      <p>
        <span className={reserved ? 'active-badge' : null}>
          {reserved ? 'Reserved' : null}
        </span>
        {rocket.description}
      </p>
      <img src={rocket.flickr_images[0]} alt="Rocket" />
      <button
        type="button"
        className={reserved ? 'button-gray' : 'button-primary'}
        onClick={bookingStatus}
      >
        {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
      </button>
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
