// import SavedRockets from '../../components/rockets/SaveRocketsToLocal';

const GET_ROCKET = 'spacetravelerhub/rocket/GET_ROCKET';
const BOOK_ROCKET = 'spacetravelerhub/rocket/BOOK_ROCKET';
const CANCEL_ROCKET = 'spacetraverhub/rocket/CANCEL_ROCKET';
const DISPLAY_RESERVED_ROCKETS = 'spacetravelerhub/rocket/DISPLAY_RESERVED_ROCKETS';

const initialState = [];

export const getRocket = (rockets) => ({
  type: GET_ROCKET,
  payload: rockets,
});

export const bookRocket = (payload) => ({
  type: BOOK_ROCKET,
  payload,
});

export const cancelRocket = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

export const displayReservedRockets = (payload) => ({
  type: DISPLAY_RESERVED_ROCKETS,
  payload,
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
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.rocket_id !== action.payload) {
          return rocket;
        }
        return {
          ...rocket,
          reserved: true,
        };
      });
    case CANCEL_ROCKET:
      return state.map((rocket) => {
        if (rocket.rocket_id === action.payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
    case DISPLAY_RESERVED_ROCKETS:
      return state.filter((rocket) => rocket.rocket_id === action.payload);
    default:
      return state;
  }
};

export default rocketReducer;
