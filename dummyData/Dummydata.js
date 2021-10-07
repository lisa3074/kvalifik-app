import ChatRoom from "../classModels/ChatRoom";
import Message from "../classModels/ChatRoom";
import User from "../classModels/ChatRoom";

export const Users = [
  new User("1", "Peter Møller", "Jensen", "dummyUrlLink"),
  new User("2", "Lasse", "Stausgaard", "dummyUrlLink"),
  new User("3", "Lasse", "Vestergaard", "dummyUrlLink"),
];

export const Messages = [
  new Message("1", "Hello, where is everyone?", new Date(2021, 0, 1, 12, 10, 5), Users[0]),
  new Message("2", "I am here", new Date(2021, 0, 1, 12, 15, 5), Users[1]),
  new Message("3", "Stfu Lasse", new Date(2021, 0, 1, 12, 15, 5), Users[0]),
  new Message("4", "I am speechless", new Date(2021, 0, 1, 12, 15, 5), Users[1]),
];

export const ChatRooms = [
  new ChatRoom("1", "urlToImage", "CBS Surf", Messages),
  new ChatRoom("2", "urlToImage", "CBS Feminist Society", []),
  new ChatRoom("3", "urlToImage", "CBS Students", []),
];
