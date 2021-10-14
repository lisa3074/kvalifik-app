import Message from "./../../../classModels/Message";
import ChatRoom from "./../../../classModels/ChatRoom";
import User from "./../../../classModels/User";
import { Users } from "../../../dummyData/Dummydata";

export const TOGGLE_HAPPY = "TOGGLE_HAPPY";
export const NEW_CHATROOM = "NEW_CHATROOM";
export const DELETE_CHATROOM = "DELETE_CHATROOM";
export const NEW_CHATMESSAGE = "NEW_CHATMESSAGE";
export const GET_CHATROOMS = "GET_CHATROOMS";

const endpointChatRooms = "https://kvalifik-bf2c3-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=";
const endpointMessages =
  "https://kvalifik-bf2c3-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/messages.json?auth=";

export const toggleHappy = isHappy => {
  return { type: TOGGLE_HAPPY, payload: isHappy };
};

export const newChatRoom = chatroomName => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    const response = await fetch(`${endpointChatRooms}${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatroomName: chatroomName,
        messages: [],
        image: undefined,
        read: false,
      }),
    });

    const data = await response.json(); // json to javascript
    console.log(data);
    console.log(`${endpointChatRooms}${token}`);

    if (!response.ok) {
      //There was a problem..
      console.error("ERROR in response");
    } else {
      const newChatRoom = new ChatRoom(data.name, data.image, chatroomName, [], data.read);
      dispatch({ type: NEW_CHATROOM, payload: newChatRoom });
    }
  };
};
export const getChatRooms = () => {
  return async (dispatch, getState) => {
    const token = getState().user.token ? getState().user.token : localStorage.getItem("token");
    const response = await fetch(`${endpointChatRooms}${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json(); // json to javascript
    console.log(data);

    if (!response.ok) {
      //There was a problem..
      console.error("ERROR in response");
    } else {
      const chatArray = [];
      for (const key in data) {
        //chatArray.push(chat);
        //console.log(chat, chatArray);
        const oldChatRooms = new ChatRoom(key, undefined, data[key].chatroomName, [], data[key].read);
        console.log(data[key].chatroomName);
        // const room = { id: key, chatRoomName: data[key].chatroomName };
        chatArray.push(oldChatRooms);
      }
      console.log(chatArray);
      dispatch({ type: GET_CHATROOMS, payload: chatArray });
    }
  };
};

export const deleteChatRoom = chatroomName => {
  return { type: DELETE_CHATROOM, payload: chatroomName };
};

export const newChatMessage = (chatRoomId, message) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    //Wrong endpoint. Is creating a messages collection on same level as chatrooms.
    //need to put messages to specific chatroom
    const response = await fetch(`${endpointMessages}${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messageText: message,
        messageTimestamp: new Date(),
        user: new User("1", "Peter Møller", "Jensen", "dummyUrlLink"),
      }),
    });

    const data = await response.json(); // json to javascript
    console.log(data);
    console.log(`${endpointMessages}${token}`);

    if (!response.ok) {
      //There was a problem..
      console.error("ERROR in response");
    } else {
      // const newChatRoom = new ChatRoom(data.name, data.image, chatroomName, [], data.read);
      const messageObj = new Message(
        data.name,
        message,
        new Date(),
        new User("1", "Peter Møller", "Jensen", "dummyUrlLink")
      );
      dispatch({ type: NEW_CHATMESSAGE, payload: { chatRoomId, messageObj } });
      //return { type: NEW_CHATMESSAGE, payload: { chatRoomId, messageObj } };
    }
  };
};
