

const loadingReducer = (state = [], { payload, type }) => {
  switch (type) {
  case 'IS_LOADING':
    return Object.assign({}, state, payload);
  default:
    return state;
  }
};

export default loadingReducer;
