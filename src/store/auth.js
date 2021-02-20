import { authApi } from '../API';

const SET_STATE = 'SET_STATE';
const SET_LOADING_FALSE = 'SET_LOADING_FALSE';
const SET_LOADING_TRUE = 'SET_LOADING_TRUE';

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
    case SET_STATE:
      newState = {
        ...newState,
        ...action.payload
      };
      break;
      case SET_LOADING_TRUE: 
        newState = {
          ...newState,
          isLoading: true,
        };
        break;
      case SET_LOADING_FALSE: 
        newState = {
          ...newState,
          isLoading: false,
        };
        break;
    default: break;
  }
  return newState;
}

const setUserAC = (data) => ({
    type: SET_STATE,
    payload: data,
});

const setLoadingFalse = () => ({
  type: SET_LOADING_FALSE,
});

const setLoadingTrue = () => ({
  type: SET_LOADING_TRUE,
});

export const setUser = () => (dispatch) => {
  dispatch(setLoadingTrue());
  authApi.get().then(data => dispatch(setUserAC(data)));  
};

export default authReducer;