// Central place for book info: titles, blurbs, covers and buy links all
// read from here, so every page updates together.
export const books = [
  {
    slug: "meeting-the-allens-on-hart-street",
    series: "Meeting the Allens",
    number: 1,
    title: "Meeting the Allens on Hart Street",
    tagline: "The day everything changed for Jordan.",
    blurb:
      "A new street, a new school, and a family next door who make room at their table. Book one of the Meeting the Allens series introduces Jordan and the friendships that will carry him through everything that comes next.",
    cover: "/book1-cover.png",
    comingSoon: false,
    buyUrl: "#",
  },
  {
    slug: "jordan-makes-a-stand",
    series: "Meeting the Allens",
    number: 2,
    title: "Jordan Makes a Stand",
    tagline: "Doing the right thing is rarely the easy thing.",
    blurb:
      "When the hallways get unkind, Jordan has to decide who he is going to be. A warm, hopeful story about courage, forgiveness, and the friends who stand beside you when you finally speak up.",
    cover: "/pacell-cover-2.png",
    comingSoon: false,
    buyUrl: "#",
  },
  {
    slug: "jordan-makes-an-important-decision",
    series: "Meeting the Allens",
    number: 3,
    title: "Jordan Makes an Important Decision",
    tagline: "Some choices you make for yourself.",
    blurb:
      "Jordan has learned to welcome others and to stand up for what is right. Now comes the choice that is his alone to make, with his family, the Allens and the whole gang beside him. Book three brings the series home.",
    cover: "/book3-cover.png",
    comingSoon: true,
    buyUrl: null,
  },
];

export const AUTHOR = {
  name: "Pacell McCobb",
  role: "Christian Fiction & Christian Contemporary",
  photo: "/pacell-headshot.jpg",
};
