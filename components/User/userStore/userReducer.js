import { LOGIN, SIGNUP, LOGOUT } from "./UserAction";

export const initialState = {
  loggedInUser: undefined,
  token: undefined,
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      console.log({
        ...state,
        loggedInUser: action.payload.signedUpUser,
        token: action.payload.token,
      });
      return {
        ...state,
        loggedInUser: action.payload.signedUpUser,
        token: action.payload.token,
      };
    case LOGIN:
      console.log({
        ...state,
        loggedInUser: action.payload.loggedInUser,
        token: action.payload.token,
      });

      return {
        ...state,
        loggedInUser: action.payload.loggedInUser,
        token: action.payload.token,
      };
    case LOGOUT:
      console.log({ ...state, loggedInUser: action.payload, token: undefined });
      return { ...state, loggedInUser: action.payload, token: undefined };
    default:
      return state;
  }
};

export default UserReducer;
