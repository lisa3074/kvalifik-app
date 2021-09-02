class User {
  constructor(uuid, firstName, lastName, email, studyProgramme, chatToggle, imageUrl) {
    this.uuid = uuid;
    this.firstName = firstName;
    this.imageUrl = imageUrl;
    this.lastName = lastName;
    this.email = email;
    this.chatToggle = chatToggle;
    this.studyProgramme = studyProgramme;
  }
}

export default User;
