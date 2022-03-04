import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = JSON.parse(localStorage.getItem('missions')) || [];
  const joinedMissions = missions.filter((mission) => mission.status === 'booked');
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="container">
      <div className="my-profile profile-section">
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
        <section>
          <h2>My Missions</h2>
          <ul>
            {
              joinedMissions.map((mission) => <li key={0}>{mission.mission_name}</li>)
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