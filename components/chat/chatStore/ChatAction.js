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
const endpointMessages = "https://kvalifik-bf2c3-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/";

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
    const token = getState().user.token;
    const response = await fetch(`${endpointChatRooms}${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json(); // json to javascript

    if (!response.ok) {
      //There was a problem..
      console.error("ERROR in response");
    } else {
      const chatArray = [];
      for (const key in data) {
        let messages = [];
        for (const key2 in data[key].messages) {
          const msg = data[key].messages[key2];
          messages.push(new Message(key2, msg.messageText, new Date(msg.messageTimestamp), msg.user));
        }
        const oldChatRooms = new ChatRoom(
          key,
          data[key].imageURL,
          data[key].chatroomName,
          data[key].messages ? messages : [],
          data[key].read
        );
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

export const newChatMessage = (chatRoomId, message, loggedInUser) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    //console.log(...message);
    const response = await fetch(`${endpointMessages}${chatRoomId}/messages.json?auth=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messageText: message,
        messageTimestamp: new Date(),
        user: loggedInUser,
        // ...message,
      }),
    });

    const data = await response.json(); // json to javascript
    /*  console.log(data);
    console.log(response);
    console.log(`${endpointMessages}${token}`); */

    if (!response.ok) {
      //There was a problem..
      console.error("ERROR in response");
    } else {
      const messageObj = new Message(data.name, message, new Date(), loggedInUser);
      dispatch({ type: NEW_CHATMESSAGE, payload: { chatRoomId, messageObj } });
    }
  };
};
