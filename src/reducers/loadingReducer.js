const INITIAL_STATE = {
  isLoading: false
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING_START":
      return { isLoading: true };
    case "LOADING_FINISH":
      return { isLoading: false };
    default:
      return state;
  }
};

export default loadingReducer;
