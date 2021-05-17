const initialState = {
  mobilemenu: false,
  chats__active: false,
  friends__active: false,
  chat__active: false,
  loggedin: null,
};

const actionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        loggedin: action.payload,
      };
    case "FRIENDS__ACTIVE":
      return {
        ...state,
        friends__active: action.payload,
      };
    case "CHAT__ACTIVE":
      return {
        ...state,
        chat__active: action.payload,
      };
    default:
      return state;
  }
};

export default actionsReducer;
