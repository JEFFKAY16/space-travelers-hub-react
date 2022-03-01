import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, getRocket } from '../redux/rockets/rockets';

const RocketsList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Hey Rocket List</h3>
    </>
  );
};

export default RocketsList;
