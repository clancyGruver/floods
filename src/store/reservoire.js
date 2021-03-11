import { reservoireAPI } from '../API';

const SET_RESERVOIRES = 'SET_RESERVOIRES';

const initialState = {
  reservoires: [],
  currentReservoire: {},
};

const reservoireReducer = (state = initialState, action) => {
  let newState = {...state};
  switch(action.type) {
    case SET_RESERVOIRES:
      newState = {
        ...newState,
        reservoires: [...action.payload],
      };
      break;
    default: break;
  }
  return newState;
}

const setReservoiresAC = (reservoires) => ({
  type: SET_RESERVOIRES,
  payload: reservoires,
});

export const setReservoires = () => (dispatch) => {
  reservoireAPI.list().then(reservoires => {
    dispatch(setReservoiresAC(reservoires));
  });
};

export default reservoireReducer;