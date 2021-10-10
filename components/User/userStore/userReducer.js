import TabBarBottom from "../../TabBarBottom";
import { LOGIN, SIGNUP } from "./userAction";

export const initialState = {
  signedUpUser: undefined,
  loggedInUser: undefined,
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      /*     console.log({
        ...state,
        signedUpUser: action.payload,
      }); */
      return {
        ...state.signedUpUser,
        signedUpUser: action.payload,
      };
    case LOGIN:
      console.log({
        ...state.loggedInUser,
        loggedInUser: action.payload,
      });
      return {
        ...state.loggedInUser,
        loggedInUser: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
