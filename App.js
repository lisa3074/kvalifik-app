import React, { useState } from "react";
import TabBarBottom from "./components/TabBarBottom";
import { Provider, useSelector } from "react-redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import ChatReducer from "./components/chat/chatStore/ChatReducer";
import UserReducer from "./components/User/userStore/UserReducer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import { initRtdb } from "./components/chat/firebase/initRtdb";
import StartNav from "./StartNav";

const rootReducer = combineReducers({
  chat: ChatReducer,
  user: UserReducer,
  //posts: PostReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const App = () => {
  //initRtdb();
  return (
    <Provider store={store}>
      <StartNav />
    </Provider>
  );
};
export default App;
