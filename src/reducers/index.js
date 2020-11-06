export const reducer = (state, action) => {
  switch (action.type) {
    case GET_CANVAS:
      return { ...state, name: action.payload };
    case GET_POSTERP:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};
const GET_CANVAS = "GET_CANVAS";
const GET_POSTERP = "GET_POSTER";
