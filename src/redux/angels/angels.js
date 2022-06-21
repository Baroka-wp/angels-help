import axios from 'axios';
import { onFaillure, onRequest, onSuccess } from '../loader/loader';

const GET_ANGELS = 'angels/GET_ANGELS';
const FILTER_ANGELS = 'angels/FILTER_ANGELS';

export const getAngels = (payload) => ({ type: GET_ANGELS, payload });
export const filterAngels = (payload) => ({ type: FILTER_ANGELS, payload });
const url = 'https://the-72-angels-of-the-kabbalah.onrender.com/';

export const fetchAgels = () => async (dispatch) => {
  dispatch(onRequest());
  try {
    const resp = await axios.get(url);
    const data = await resp.data;
    dispatch(getAngels(data));
    dispatch(onSuccess());
  } catch (error) {
    console.log(error);
    dispatch(onFaillure);
  }
};

const angelsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ANGELS:
      return action.payload;
    case FILTER_ANGELS:
      return [...state].filter((item) => item.category === action.payload);
    default:
      return state;
  }
};

export default angelsReducer;
