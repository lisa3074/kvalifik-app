import React from "react";
import TabBarBottom from "./components/TabBarBottom";
import { Provider } from "react-redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import ChatReducer from "./components/chat/chatStore/ChatReducer";
import Login from "./components/User/Login";
import UserReducer from "./components/User/userStore/userReducer";
import { initialState } from "./components/User/userStore/userReducer";

const rootReducer = combineReducers({
  chat: ChatReducer,
  user: UserReducer,
  //posts: PostReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const App = () => {
  console.log(initialState.loggedInUser);
  return (
    <Provider store={store}>
      <TabBarBottom />
    </Provider>
    /* <Provider store={store}>{initialState.loggedInUser ? <TabBarBottom /> : <Login />}</Provider>; */
  );
};
export default App;
