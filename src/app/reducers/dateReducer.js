const initialState = {
  date: new Date(),
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_DATE":
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

export default dateReducer;
