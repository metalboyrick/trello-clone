import { Card } from "../models/Card";
import { BLUE, GREEN, PURPLE, RED, VIOLET } from "./colorCodes";
import { MOCK_USERS } from "./user.mock";
import image1 from "./assets/image-1.png";

export const MOCK_CARDS: Card[] = [
  {
    id: 1,
    slot: "Todo",
    headline: "Wash the dishes",
    description: "Get them dishes clean by noon!",
    img: image1.src,
    tags: [BLUE, RED, VIOLET],
    users: [],
    commentCount: 0,
    likes: 0,
    shared: 0,
    order: 0,
  },
  {
    id: 2,
    slot: "Todo",
    headline: "Do my homework",
    description: "Get them homeworks by noon!",
    img: null,
    tags: [GREEN, PURPLE],
    users: MOCK_USERS,
    commentCount: 0,
    likes: 0,
    shared: 0,
    order: 1,
  },
  {
    id: 3,
    slot: "In Progress",
    headline: "Code hackathon project",
    description: "Get them homeworks by noon!",
    img: null,
    tags: ["projects"],
    users: [],
    commentCount: 0,
    likes: 0,
    shared: 0,
    order: 0,
  },
  {
    id: 4,
    slot: "In Progress",
    headline: "Learn solidity",
    description: "Get them homeworks by noon!",
    img: null,
    tags: ["projects"],
    users: [],
    commentCount: 0,
    likes: 0,
    shared: 0,
    order: 1,
  },
];
