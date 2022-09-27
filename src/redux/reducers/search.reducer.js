import { combineReducers } from "redux";

// Reducer to set tags
const tags = (state = [], action) => {
  switch (action.type) {
    case "SET_TAGS":
      return action.payload;
    default:
      return state;
  }
};

// Reducer to set activities
const activities = (state = [], action) => {
  switch (action.type) {
    case "SET_ACTIVITIES":
      return action.payload;
    default:
      return state;
  }
};

// Reducer for search results
const results = (state = [], action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  tags,
  results,
  activities,
});
