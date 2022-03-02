import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <>
    <h2>{rocket.rocket_id}</h2>
    <h3>{rocket.rocket_name}</h3>
    <p>{rocket.description}</p>
    <img src={rocket.flickr_images[0]} alt="" />
    <button type="button">Reserve Rocket</button>
  </>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default Rocket;
