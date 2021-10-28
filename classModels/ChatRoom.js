class ChatRoom {
  constructor(chatRoomId, imageUrl, chatRoomName, messages, read) {
    this.chatRoomId = chatRoomId;
    this.imageUrl = imageUrl;
    this.chatRoomName = chatRoomName;
    this.messages = messages;
    this.read = read;
  }
}

export default ChatRoom;
