import initialState from "./initial";

// Reducer functions


// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "BLAH": return {...state}
    default : return state;
  }
};

export default reducer;