const initialState = {
  dark__mode: false,
};

const actionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK__MODE":
      return {
        ...state,
        dark__mode: action.payload,
      };
    default:
      return state;
  }
};

export default actionsReducer;
