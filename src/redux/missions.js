/* eslint-disable no-param-reassign */
// /* eslint-disable no-param-reassign */
// import { createSlice } from '@reduxjs/toolkit';

// // slice
// const missionsSlice = createSlice({
//   name: 'missions',
//   initialState: {
//     missions: [],
//   },
//   reducers: {
//     missionsError: (state, action) => {
//       state.error = action.payload;
//     },
//     missionsSuccess: (state, action) => {
//       state.missions = action.payload;
//       state.loading = false;
//     },
//     joinMission: (state, action) => {
//       const Mission = state.missions.find((Mission) => Mission.id === action.payload);
//       Mission.status = 'booked';
//     },
//     cancelReservation: (state, action) => {
//       const Mission = state.missions.find((Mission) => Mission.id === action.payload);
//       Mission.status = '';
//     },
//   },
// });

// export default missionsSlice.reducer;

// // eslint-disable-next-line max-len
// export const {
//   missionsSuccess, joinMission, cancelReservation, missionsError,
// } = missionsSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import Save from '../components/Missions/SaveMissions';

// slice
const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
  },
  reducers: {
    missionsError: (state, action) => {
      state.error = action.payload;
    },
    missionsSuccess: (state, action) => {
      state.missions = action.payload;
      state.loading = false;
      Save(action.payload);
    },
    joinMission: (state, action) => {
      const newState = state.missions.map((mission) => (mission.mission_id === action.payload ? ({ ...mission, status: 'booked' }) : mission));
      state.missions = newState;
      Save(newState);
    },
    leaveMission: (state, action) => {
      const newState = state.missions.map((mission) => (mission.mission_id === action.payload ? ({ ...mission, status: '' }) : mission));
      state.missions = newState;
      Save(newState);
    },
  },
});

export default missionsSlice.reducer;

// Actions
export const {
  missionsSuccess, joinMission, leaveMission, missionsError,
} = missionsSlice.actions;
