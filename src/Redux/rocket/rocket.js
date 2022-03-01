const GET_ROCKET = 'spacetravelerhub/rocket/GET_ROCKET';

const initialState = [];

export const getRocket = (rockets) => ({
  type: GET_ROCKET,
  payload: rockets,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
