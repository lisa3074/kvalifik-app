//import ChatRoom from "./../../models/ChatRoom";
import { DELETE_CHATROOM, NEW_CHATMESSAGE, NEW_CHATROOM, GET_CHATROOMS } from "./ChatAction";
import { ChatRooms } from "./../../../dummyData/Dummydata";

const initialState = {
  chatRooms: undefined,
};

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHATROOMS:
      // console.log("Hallo");
      return { ...state, chatRooms: action.payload };

    case NEW_CHATROOM:
      return { ...state, chatRooms: [...state.chatRooms, action.payload] };

    case DELETE_CHATROOM:
      return { ...state, chatRooms: state.chatRooms.filter(room => room.chatRoomName !== action.payload) };

    case NEW_CHATMESSAGE:
      //console.log(action.payload);
      // Find the chatroom object based on chatroomId.
      // Copy messages array of the right chatroom object
      // Copy chatrooms to avoid state mutations when updating the messages array in the
      // specific chatroom object.

      const chatroom = state.chatRooms.find(room => room.chatRoomId === action.payload.chatRoomId);
      const chatmessages = [...chatroom.messages, action.payload.messageObj];

      // 2: Copy chatroom object and attach new chat array that you copied.
      const newChatRoom = { ...chatroom };
      newChatRoom.messages = chatmessages;

      //3: Insert the new chatroom object into the array of chatrooms
      // Hint: use js-array's findIndex function, to find the index in the array of the object we want.
      // js Splice method to create a new array and insert the created chatroom object.
      const index = state.chatRooms.findIndex(room => room.chatRoomId === action.payload.chatRoomId);
      const chatroomArray = [...state.chatRooms];
      chatroomArray.splice(index, 1, newChatRoom);

      return { ...state, chatRooms: chatroomArray };

    default:
      return state;
  }
};

export default ChatReducer;
