import { User } from "../models/User";
import { users } from "./images";

export const MOCK_USERS: User[] = [
  {
    id: 0,
    name: "Emily",
    img: users.user1.src,
  },
  {
    id: 1,
    name: "John",
    img: users.user2.src,
  },
  {
    id: 2,
    name: "Kimberly",
    img: users.user3.src,
  },
  {
    id: 3,
    name: "Amy",
    img: users.user4.src,
  },
  {
    id: 4,
    name: "Charlie",
    img: users.user5.src,
  },
  {
    id: 5,
    name: "Alex",
    img: users.user6.src,
  },
];
