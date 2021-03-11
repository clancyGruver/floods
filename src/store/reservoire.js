import { reservoireAPI } from '../API';

const SET_RESERVOIRES = 'SET_RESERVOIRES';

const initialState = {
  id: null,
  name: '',
  raion: '',
  isAdmin: false,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  let newState = {...state};
  switch(action.type) {
    case SET_RESERVOIRES:
      newState = {
        ...newState,
        ...action.payload
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

export const setReservoires = async () => async (dispatch) => {
  const reservoires = await reservoireAPI.list();
  dispatch(setReservoiresAC(reservoires));
};

export default authReducer;