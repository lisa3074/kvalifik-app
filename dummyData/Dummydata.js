import ChatRoom from "../classModels/ChatRoom";
import Message from "../classModels/Message";
import User from "../classModels/User";
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
  new Message(
    "1",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    new Date(2021, 0, 1, 12, 10, 5),
    Users[0]
  ),
  new Message(
    "2",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    new Date(2021, 0, 1, 12, 15, 5),
    Users[1]
  ),
  new Message("3", "Stfu Lasse", new Date(2021, 0, 1, 12, 15, 5), Users[0]),
  new Message("4", "I am speechless", new Date(2021, 0, 1, 12, 15, 5), Users[1]),
];

export const ChatRooms = [
  new ChatRoom("1", surf, "CBS Surf", Messages, false),
  new ChatRoom("2", feminist, "CBS Feminist Society", [Messages[0], Messages[2]], true),
  new ChatRoom("3", students, "CBS Students", [Messages[0], Messages[1]], true),
  new ChatRoom("4", golf, "CBS Golf", [Messages[0]], false),
];
