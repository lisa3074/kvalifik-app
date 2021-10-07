import Message from "./../../../classModels/Message";
import ChatRoom from "./../../../classModels/ChatRoom";
import { Users } from "../../../dummyData/Dummydata";

export const TOGGLE_HAPPY = "TOGGLE_HAPPY";
export const NEW_CHATROOM = "NEW_CHATROOM";
export const DELETE_CHATROOM = "DELETE_CHATROOM";
export const NEW_CHATMESSAGE = "NEW_CHATMESSAGE";

export const toggleHappy = isHappy => {
  return { type: TOGGLE_HAPPY, payload: isHappy };
};

export const newChatRoom = chatroomName => {
  const tempId = Math.random().toString();
  const newChatRoom = new ChatRoom(tempId, undefined, chatroomName, []);
  return { type: NEW_CHATROOM, payload: newChatRoom };
};

export const deleteChatRoom = chatroomName => {
  return { type: DELETE_CHATROOM, payload: chatroomName };
};

export const newChatMessage = (chatRoomId, message) => {
  const messageObj = new Message(Math.random().toString(), message, new Date(), Users[0]);
  return { type: NEW_CHATMESSAGE, payload: { chatRoomId, messageObj } };
};
