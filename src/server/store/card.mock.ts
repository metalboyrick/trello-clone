import { Card } from "../models/Card";
import { MOCK_USERS } from "./user.mock";

export const MOCK_CARDS: Card[] = [
  {
    id: 1,
    slot: "Todo",
    headline: "Wash the dishes",
    description: "Get them dishes clean by noon!",
    img: null,
    tags: ["urgent", "housework"],
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
    tags: ["urgent", "schoolwork"],
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
];
