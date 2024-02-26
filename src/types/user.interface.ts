export interface IUser {
  username: string;
  email: string;
  password: string;
  img: string;
  isAdmin: boolean;
}

export interface Credentials {
  username: string;
  password: string;
}
