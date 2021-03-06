import axios from 'axios';
import { missionsError, missionsSuccess } from '../../redux/missions';
import Apis from '../Apis';

const fetchMissions = () => async (dispatch) => {
  try {
    const savedData = JSON.parse(localStorage.getItem('missions'));
    if (savedData && savedData !== null) {
      dispatch(missionsSuccess(savedData));
    } else {
      const missions = await axios.get(Apis.missions);
      dispatch(missionsSuccess(missions.data.map((mission) => ({ ...mission, status: '' }))));
    }
  } catch (error) {
    dispatch(missionsError(error.message));
  }
};

export default fetchMissions;
