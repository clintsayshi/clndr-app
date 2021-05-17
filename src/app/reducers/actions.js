const initialState = {
  mobilemenu: false,
  loggedin: null,
};

const actionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        loggedin: action.payload,
      };
    default:
      return state;
  }
};

export default actionsReducer;
