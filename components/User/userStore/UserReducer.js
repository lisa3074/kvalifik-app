import { LOGIN, SIGNUP, LOGOUT, REFRESH_TOKEN, UPDATE_NOTIFICATIONS, UPDATE_USER } from "./UserAction";

export const initialState = {
  loggedInUser: undefined,
  signedUpUser: undefined,
  token: undefined,
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        loggedInUser: action.payload.signedUpUser,
        token: action.payload.token,
      };
    case REFRESH_TOKEN:
      return { ...state, token: action.payload };
    case LOGIN:
      return {
        ...state,
        loggedInUser: action.payload.loggedInUser,
        token: action.payload.token,
      };
    case LOGOUT:
      return { ...state, loggedInUser: action.payload, token: undefined };
    case UPDATE_NOTIFICATIONS:
      return {
        ...state,
        loggedInUser: {
          ...state.loggedInUser,
          chatNotifications: action.payload.chatNotifications,
          eventNotifications: action.payload.eventNotifications,
        },
        token: action.payload.token,
      };
    case UPDATE_USER:
      return {
        ...state,
        loggedInUser: {
          ...state.loggedInUser,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          studyProgramme: action.payload.studyProgramme,
        },
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default UserReducer;
