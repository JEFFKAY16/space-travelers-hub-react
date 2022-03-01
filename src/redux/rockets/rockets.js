const GET_ROCKET = 'spacetravelerhub/rocket/GET_ROCKET';

const initialState = [];

export const getRocket = (rockets) => ({
  type: GET_ROCKET,
  payload: rockets,
});

export const fetchRockets = async () => {
  const url = 'https://api.spacexdata.com/v3/rockets';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET:
      return [...action.payload];
    default:
      return state;
  }
};

export default rocketReducer;
