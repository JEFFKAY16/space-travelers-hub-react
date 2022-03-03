import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);

  const reservedRockets = rockets.filter((rocket) => {
    if (rocket.reserved) {
      return rocket;
    }
    return null;
  });

  return (
    <div className="container">
      <div className="my-profile">
        <section>
          <h2>My Missions</h2>
        </section>
        <section>
          <h2>My Rockets</h2>
          <ul>
            {
              reservedRockets.map((rocket) => (
                <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
              ))
            }
          </ul>
        </section>
      </div>
    </div>
  );
};

Profile.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Profile;
