class Message {
  constructor(messageId, messageText, messageTimestamp, user) {
    this.messageId = messageId;
    this.messageTimestamp = messageTimestamp;
    this.messageText = messageText;
    this.user = user;
  }
}

export default Message;
