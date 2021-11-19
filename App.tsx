import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import ChatReducer from "./components/chat/chatStore/ChatReducer";
import UserReducer from "./components/User/userStore/UserReducer";
import StartNav from "./StartNav";
import User from "./classModels/User";
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { Teko_500Medium } from "@expo-google-fonts/teko";
import AppLoading from "expo-app-loading";

const rootReducer = combineReducers({
  chat: ChatReducer,
  user: UserReducer,
  //posts: PostReducer
});
let RootState: User[];
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const App = () => {
let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    Teko_500Medium,
});
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <StartNav />
      </Provider>
    );
  }
};
export default App;
