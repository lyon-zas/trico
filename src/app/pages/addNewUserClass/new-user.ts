export class NewUser {

  userId: number;
  userName: string;
  webMail: string;
  firstName: string;
  lastName: string;
  accountStatus: string;
  userRole: string;
  password: string | any;
  confirmPassword: string | any;
  profilePicture: any;
  todayDate: Date | any

  constructor(
    userId: number,
    userName: string,
    webMail: string,
    firstName: string,
    lastName: string,
    accountStatus: string,
    userRole: string,
    password: string | any,
    confirmPassword: string | any,
    profilePicture: any,
    todayDate: Date | any
  ){
    this.userId = userId;
    this.userName = userName;
    this.webMail = webMail;
    this.firstName = firstName;
    this.lastName = lastName;
    this.accountStatus = accountStatus;
    this.userRole = userRole;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.profilePicture = profilePicture;
    this.todayDate = todayDate;
  }
}
