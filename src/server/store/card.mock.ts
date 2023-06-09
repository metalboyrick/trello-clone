import { Card } from "../models/Card";
import { BLUE, GREEN, PURPLE, RED, VIOLET, ORANGE } from "./colors";
import { banners } from "./images";
import { MOCK_USERS } from "./user.mock";
import image1 from "./assets/image-1.png";

export const MOCK_CARDS: Card[] = [
  {
    id: 0,
    slot: "Design",
    headline:
      "Old fashioned recipe for preventing allergies and chemical sensitivities",
    description: "",
    img: null,
    tags: [ORANGE],
    users: [MOCK_USERS[0]],
    commentCount: 34,
    likes: 14,
    shared: 34,
    order: 0,
  },
  {
    id: 1,
    slot: "Design",
    headline: "Home business advertising ideas",
    description:
      "Successful businesses know the importance of building and maintaining good working.",
    img: null,
    tags: [VIOLET, RED, PURPLE, GREEN],
    users: [MOCK_USERS[0], MOCK_USERS[1]],
    commentCount: 23,
    likes: 12,
    shared: 43,
    order: 1,
  },
  {
    id: 2,
    slot: "Design",
    headline: "Cosmetic surgery abroad making the right choice",
    description: "",
    img: banners.image1.src,
    tags: [BLUE],
    users: [MOCK_USERS[2], MOCK_USERS[1], MOCK_USERS[0]],
    commentCount: 54,
    likes: 16,
    shared: 33,
    order: 2,
  },
  {
    id: 3,
    slot: "Prototip",
    headline: "Home business advertising ideas",
    description:
      "Successful businesses know the importance of building and maintaining good working.",
    img: null,
    tags: [VIOLET, RED, PURPLE],
    users: [],
    commentCount: 76,
    likes: 45,
    shared: 12,
    order: 0,
  },
  {
    id: 4,
    slot: "Prototip",
    headline: "Unmatched toner cartridge quality 20 less than oem price",
    description:
      "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.",
    img: banners.image3.src,
    tags: [BLUE, ORANGE],
    users: [...MOCK_USERS.slice(2, 5)],
    commentCount: 76,
    likes: 32,
    shared: 66,
    order: 1,
  },
  {
    id: 5,
    slot: "Prototip",
    headline: "How to look up",
    description:
      "Are you considering buying a compatible inkjet cartridge for your printer?",
    img: banners.image6.src,
    tags: [GREEN],
    users: [...MOCK_USERS.slice(1, 4)],
    commentCount: 54,
    likes: 76,
    shared: 11,
    order: 2,
  },
  {
    id: 6,
    slot: "Trello",
    headline: "Types of paper in catalog printing",
    description:
      "Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
    img: banners.image5.src,
    tags: [PURPLE, RED, BLUE],
    users: [...MOCK_USERS.slice(3, 6)],
    commentCount: 34,
    likes: 23,
    shared: 98,
    order: 0,
  },
  {
    id: 7,
    slot: "Trello",
    headline: "There is no competition",
    description:
      "This article is floated online with an aim to help you find the best dvd printing solution.",
    img: null,
    tags: [VIOLET, GREEN],
    users: [...MOCK_USERS.slice(1, 3)],
    commentCount: 23,
    likes: 12,
    shared: 44,
    order: 1,
  },
  {
    id: 8,
    slot: "Test",
    headline: "Linux or windows which is it",
    description: "Saving money – is something we would all like.",
    img: null,
    tags: [BLUE, RED],
    users: [...MOCK_USERS.slice(0, 6)],
    commentCount: 32,
    likes: 87,
    shared: 31,
    order: 0,
  },
  {
    id: 9,
    slot: "Test",
    headline: "Be single minded",
    description:
      "Create a list with all possible keywords that fit to your product, service or business field.",
    img: banners.image2.src,
    tags: [PURPLE, RED, BLUE],
    users: [...MOCK_USERS.slice(0, 3)],
    commentCount: 21,
    likes: 34,
    shared: 17,
    order: 1,
  },
  {
    id: 10,
    slot: "Test",
    headline: "Linux or windows which is it",
    description: "Saving money – is something we would all like.",
    img: null,
    tags: [ORANGE],
    users: [...MOCK_USERS.slice(1, 4)],
    commentCount: 55,
    likes: 23,
    shared: 19,
    order: 2,
  },
  {
    id: 11,
    slot: "Test",
    headline: "DNA the future of nutrition",
    description:
      "Why does anyone want a vasectomy reversal?” This is a question I hear any time I tell someone what I do for a living.",
    img: null,
    tags: [VIOLET, GREEN],
    users: [...MOCK_USERS.slice(1, 3)],
    commentCount: 12,
    likes: 33,
    shared: 66,
    order: 3,
  },
  {
    id: 12,
    slot: "Final",
    headline: "At home treatments for beauty on a budget",
    description:
      "The holidays bring with them thoughts of carving and serving delicious turkey dinners to your family and friends. Tradition has its fans, but perhaps this year you’d like to try a twist to your turkey recipe.",
    img: null,
    tags: [ORANGE, RED, PURPLE],
    users: [],
    commentCount: 87,
    likes: 54,
    shared: 32,
    order: 0,
  },
  {
    id: 13,
    slot: "Final",
    headline: "Home business advertising ideas",
    description:
      "Successful businesses know the importance of building and maintaining good working.",
    img: null,
    tags: [PURPLE, GREEN],
    users: [MOCK_USERS[5], MOCK_USERS[3]],
    commentCount: 13,
    likes: 11,
    shared: 43,
    order: 1,
  },
  {
    id: 14,
    slot: "Final",
    headline: "Tips for choosing the perfect gloss for your lips",
    description:
      "With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users.",
    img: banners.image4.src,
    tags: [PURPLE, GREEN],
    users: [MOCK_USERS[4], MOCK_USERS[2], MOCK_USERS[1]],
    commentCount: 21,
    likes: 23,
    shared: 12,
    order: 2,
  },
];
