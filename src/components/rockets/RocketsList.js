import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, getRocket } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

const RocketsList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    // const savedRockets = JSON.parse(localStorage.getItem('rockets'));
    fetchRockets().then((result) => dispatch(getRocket(result)));
  }, []);

  return (
    <>
      <h3>Rocket List</h3>
      {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            rocket={rocket}
          />
        ))
      }
    </>
  );
};

export default RocketsList;
