// Định nghĩa kiểu `user`
declare type User = {
    id: string;
    name: string;
    email: string;
    username: string;
    phonenumber: string;
    dateOfBirth: string;
};
declare type SessionData = {
  user: User;
  token: string;
};