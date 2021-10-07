import ChatRoom from "../classModels/ChatRoom";
import Message from "../classModels/ChatRoom";
import User from "../classModels/ChatRoom";
import feminist from "../static/images/feminist.png";
import golf from "../static/images/golf.png";
import surf from "../static/images/surf.png";
import students from "../static/images/students.png";

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
  new ChatRoom("1", surf, "CBS Surf", Messages),
  new ChatRoom("2", feminist, "CBS Feminist Society", []),
  new ChatRoom("3", students, "CBS Students", []),
  new ChatRoom("4", golf, "CBS Golf", []),
];
