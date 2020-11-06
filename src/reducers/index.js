export const reducer = (state, action) => {
  switch (action.type) {
    case GET_CANVAS:
      return { ...state, name: action.payload };
    case GET_POSTER:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};
const GET_CANVAS = "GET_CANVAS";
const GET_POSTER = "GET_POSTER";
