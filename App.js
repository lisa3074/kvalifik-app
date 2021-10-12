import React from "react";
import TabBarBottom from "./components/TabBarBottom";
import { Provider } from "react-redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import ChatReducer from "./components/chat/chatStore/ChatReducer";
import UserReducer from "./components/User/userStore/UserReducer";

import { initRtdb } from "./components/chat/firebase/initRtdb";

const rootReducer = combineReducers({
  chat: ChatReducer,
  user: UserReducer,
  //posts: PostReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const App = () => {
  initRtdb();

  return (
    <Provider store={store}>
      <TabBarBottom />
    </Provider>
  );
};
export default App;
