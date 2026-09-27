// Central place for book info. Book 3 is a placeholder until the cover and
// copy arrive — fill in `cover` once the art is in /public.
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
    slug: "book-three",
    series: "Meeting the Allens",
    number: 3,
    title: "Book Three",
    tagline: "Coming soon.",
    blurb:
      "The next chapter in the Meeting the Allens series. Cover reveal and release date coming soon — join the newsletter to hear it first.",
    cover: null,
    comingSoon: true,
    buyUrl: null,
  },
];

export const AUTHOR = {
  name: "Pacell McCobb",
  role: "Christian Fiction & Christian Contemporary",
  photo: "/pacell-headshot.jpg",
};
