class User {
  constructor(
    public id: string,
    public firstname: string,
    public lastname: string,
    public imageUrl: string,
    public email: string,
    public studyProgramme: string
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.imageUrl = imageUrl;
    this.email = email;
    this.studyProgramme = studyProgramme;
  }
}

export default User;
