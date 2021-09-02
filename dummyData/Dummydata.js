import ChatRoom from "../classModels/ChatRoom";
import User from "../classes/User";
import Message from "../classModels/Message";

export const ChatRooms = [
  new ChatRoom("1", "url", "Name1", [Messages]),
  new ChatRoom("2", "url", "Name2", []),
  new ChatRoom("3", "url", "Name3", []),
  new ChatRoom("4", "url", "Name4", []),
];
export const Users = [
  new User("1", "Peter", "Møller", "url"),
  new User("2", "Lasse", "Stausgaard", "url"),
  new User("3", "Lasse", "Vestergaard", "url"),
];
export const Messages = [
  new Message("1", new Date(2021, 1, 1), "text text lksajd text", Users[0]),
  new Message("2", new Date(2021, 6, 4), "text text aksjd text", Users[1]),
  new Message("3", new Date(2021, 1, 5), "text dfg text text", Users[2]),
  new Message("4", new Date(2021, 3, 1), "text asd text text", Users[1]),
];

/* export const User = [
  new User("1", "Peter", "Møller", "e@e.com", false, "someProgramme1"),
  new User("2", "first2", "last2", "q@f.com", false, "someProgramme2"),
  new User("3", "first3", "last3", "w@r.com", true, "someProgramme3"),
  new User("4", "first4", "last4", "r@r.com", false, "someProgramme4"),
]; */
