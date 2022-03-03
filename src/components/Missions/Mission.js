/* eslint-disable react/prop-types */

import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions';

export default function Mission(props) {
  const dispatch = useDispatch();
  const { data } = props;
  const name = data.mission_name;
  const id = data.mission_id;
  const { description, status } = data;

  return (
    <>
      <tr>
        <th>{name}</th>
        <td>{description}</td>
        <td>
          <span
            className={status === 'booked'
              ? 'member'
              : 'not-member'}
          >
            {status === 'booked' ? 'Member' : 'Not a member'}
          </span>
        </td>
        <td>
          <button
            type="button"
            onClick={() => (status === 'booked'
              ? dispatch(leaveMission(id))
              : dispatch(joinMission(id)))}
            className={status === 'booked' ? 'leave-btn' : 'join-btn'}
          >
            {status === 'booked' ? 'Leave mission' : 'Join mission'}
          </button>
        </td>
      </tr>
    </>
  );
}
