export type AccountStatus = 'activated' | 'deactivated' | '';
export type UserRole = 'Admin' | 'Candidate' | '';


export class User {
  userId: number;
  userName: string;
  webMail: string;
  firstName: string;
  lastName: string;
  accountStatus: AccountStatus;
  userRole: UserRole;
  password: string | any;
  confirmPassword: string | any;
  profilePicture: string | any;
  todayDate: Date | string;

  constructor(
    userId: number,
    userName: string,
    webMail: string,
    firstName: string,
    lastName: string,
    accountStatus: any | string,
    userRole: any | string,
    password: string | any,
    confirmPassword: string | any,
    profilePicture: string | any,
    todayDate: Date | string

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
