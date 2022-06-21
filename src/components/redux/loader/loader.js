const ON_REQUEST = 'ON_REQUEST';
const ON_SUCCESS = 'ON_SUCCESS';
const ON_FAILLURE = 'ON_FAILLURE';

export const onRequest = () => ({ type: ON_REQUEST });
export const onSuccess = () => ({ type: ON_SUCCESS });
export const onFaillure = () => ({ type: ON_FAILLURE });

const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case ON_REQUEST:
      return true;
    case ON_SUCCESS:
      return false;
    case ON_FAILLURE:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
