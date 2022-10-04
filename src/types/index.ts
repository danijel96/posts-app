export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}
export interface IComment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}
interface IAddress {
  city: string;
  geo: { lat: string; lng: string };
  street: string;
  suite: string;
  zipcode: string;
}
interface ICompany {
  bs: string;
  catchPhrase: string;
  name: string;
}
export interface IUser {
  address: IAddress;
  company: ICompany;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}
