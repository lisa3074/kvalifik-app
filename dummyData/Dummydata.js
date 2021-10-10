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
  new User("4", "Lisa", "Søndergaard", "dummyUrlLink"),
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
  new Message(
    "3",
    "Et tekstredigeringsværktøj til Chrome OS og Chrome.Text.app is a simple text editor for Chrome OS and Chrome. It's fast, lets you open multiple files at once, has syntax highlighting, and saves to Google Drive on Chrome OS.",
    new Date(2021, 0, 1, 12, 15, 5),
    Users[3]
  ),
  new Message(
    "4",
    "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also be sent via an Internet connection.",
    new Date(2021, 0, 1, 12, 15, 5),
    Users[2]
  ),
  new Message(
    "5",
    "The term originally referred to messages sent using the Short Message Service (SMS). It has grown beyond alphanumeric text to include multimedia messages using the Multimedia Messaging Service (MMS) containing digital images, videos, and sound content, as well as ideograms known as emoji (happy faces, sad faces, and other icons), and instant messenger applications (usually the term is used when on mobile devices).",
    new Date(2021, 0, 1, 12, 15, 5),
    Users[0]
  ),
  new Message(
    "6",
    "Text messages are used for personal, family, business and social purposes. ",
    new Date(2021, 0, 1, 12, 15, 5),
    Users[3]
  ),
  new Message(
    "7",
    "Governmental and non-governmental organizations use text messaging for communication between colleagues. ",
    new Date(2021, 0, 1, 12, 15, 5),
    Users[0]
  ),
  new Message(
    "8",
    "In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from e-commerce websites, or to participate in online contests. Advertisers and service providers use direct text marketing to send messages to mobile users about promotions, payment due dates, and other notifications instead of using postal mail, email, or voicemail.",
    new Date(2021, 0, 1, 12, 15, 5),
    Users[1]
  ),
];

export const ChatRooms = [
  new ChatRoom("1", surf, "CBS Surf", Messages, false),
  new ChatRoom("2", feminist, "CBS Feminist Society", [Messages[0], Messages[2]], true),
  new ChatRoom("3", students, "CBS Students", [Messages[0], Messages[1]], true),
  new ChatRoom("4", golf, "CBS Golf", [Messages[0]], false),
];
