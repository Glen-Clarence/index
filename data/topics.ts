export type Source = {
  id: string;
  kind: "Bookmark" | "Video" | "Article" | "Place" | "Collection";
  title: string;
  publisher: string;
  excerpt: string;
  passage: string;
  tag: string;
};
export type Finding = { text: string; sources: string[] };
export type Topic = {
  id: string;
  label: string;
  category: string;
  question: string;
  title: string;
  description: string;
  sources: Source[];
  findings: Finding[];
  takeaway: string;
  connections: string[];
};

// Original, fictional saved items. No external article content or implied endorsements.
export const topics: Topic[] = [
  {
    id: "food",
    label: "Food",
    category: "Weeknights",
    question: "That pasta recipe I saved for a weeknight.",
    title: "The pasta dinner, still in your library.",
    description: "14 recipes · 6 videos · 9 articles",
    sources: [
      {
        id: "cook-1",
        kind: "Article",
        title: "A weeknight tomato pasta",
        publisher: "Saved article / Sample",
        tag: "Recipe",
        excerpt: "One pan, a few ingredients, and dinner in half an hour.",
        passage:
          "Boil the pasta in less water than you think you need, and save a cup of it. The tomatoes, garlic, and olive oil come together in the same pan. A splash of pasta water is what makes the sauce cling, which is the only step worth remembering on a tired evening.",
      },
      {
        id: "cook-2",
        kind: "Video",
        title: "How to finish the sauce",
        publisher: "Saved video / Sample",
        tag: "Sauce",
        excerpt: "The useful part is the last minute in the pan.",
        passage:
          "The video spends most of its time on the finish: pasta into the sauce, a ladle of the cooking water, and a toss until it looks glossy. It also shows what to do when the sauce is too thick. That last minute is why you saved it.",
      },
      {
        id: "cook-3",
        kind: "Bookmark",
        title: "What to pick up on the way home",
        publisher: "Saved bookmark / Sample",
        tag: "Shopping",
        excerpt: "Tomatoes, garlic, pasta, and something green.",
        passage:
          "The bookmark is a short list you kept with the recipe: good tomatoes if you can find them, a head of garlic, and a bunch of basil or parsley. It notes that a tin of tomatoes works on a weeknight. You saved the list so you would not have to open the recipe in the shop.",
      },
    ],
    findings: [
      {
        text: "The article is the weeknight pasta you meant to cook.",
        sources: ["cook-1"],
      },
      {
        text: "The video shows the last minute that makes the sauce work.",
        sources: ["cook-1", "cook-2"],
      },
      {
        text: "The bookmark is the shopping list you saved beside them.",
        sources: ["cook-3"],
      },
    ],
    takeaway:
      "The recipe, the video, and the shopping list are one dinner. They still belong together.",
    connections: [
      "Recipe → The video",
      "Sauce → The last minute",
      "List → The shop",
    ],
  },
  {
    id: "local",
    label: "Local",
    category: "Nearby",
    question: "The café I saved near the park.",
    title: "The spot you kept for a Saturday.",
    description: "8 places · 5 articles · 3 collections",
    sources: [
      {
        id: "local-1",
        kind: "Place",
        title: "A café with tables outside",
        publisher: "Saved place / Sample",
        tag: "Café",
        excerpt: "Ten minutes away, and quiet before noon.",
        passage:
          "You saved the café because the tables face the park and it opens early. The note says the corner table is the one in the shade. Saturday morning is the time to go, before the lunch crowd arrives.",
      },
      {
        id: "local-2",
        kind: "Article",
        title: "The market two streets over",
        publisher: "Saved article / Sample",
        tag: "Market",
        excerpt: "Flowers, bread, and a short walk from the café.",
        passage:
          "The market runs on Saturday morning, a short walk from the café. The article points out the bread stall at the far end and says to go before eleven if you want the good loaves. You saved it because it fits the same morning.",
      },
      {
        id: "local-3",
        kind: "Collection",
        title: "Shops on the way back",
        publisher: "Saved collection / Sample",
        tag: "Shops",
        excerpt: "A bookshop, a plant shop, and somewhere to sit.",
        passage:
          "The collection is three stops between the market and home: a bookshop, a small plant shop, and a bench if you are carrying too much. You saved them together so the walk back would have somewhere to pause.",
      },
    ],
    findings: [
      {
        text: "The place is the café by the park you kept meaning to try.",
        sources: ["local-1"],
      },
      {
        text: "The article is the Saturday market a short walk from that café.",
        sources: ["local-1", "local-2"],
      },
      {
        text: "The collection is the shops you saved for the walk home.",
        sources: ["local-3"],
      },
    ],
    takeaway:
      "The café, the market, and the walk home are one Saturday. They were saved on different days.",
    connections: [
      "Café → Saturday morning",
      "Market → A short walk",
      "Shops → The way home",
    ],
  },
  {
    id: "travel",
    label: "Travel",
    category: "Weekends",
    question: "The article about a quiet weekend away.",
    title: "A weekend you meant to take.",
    description: "11 articles · 8 videos · 4 collections",
    sources: [
      {
        id: "trip-1",
        kind: "Article",
        title: "A weekend you can reach by train",
        publisher: "Saved article / Sample",
        tag: "Weekend",
        excerpt: "One neighborhood, a long lunch, and no rush to see everything.",
        passage:
          "Pick a town you can reach before lunch and stay in one neighborhood. The article suggests a walk in the morning, a long lunch, and an hour with nothing planned. A short list of places is enough. The spaces between them are the point of going.",
      },
      {
        id: "trip-2",
        kind: "Video",
        title: "An afternoon in the old streets",
        publisher: "Saved video / Sample",
        tag: "Walking",
        excerpt: "The best part is a turn you did not plan.",
        passage:
          "The video follows one walk from the station to a small square, then down to the water. It points out a bookshop and a place to sit, and it leaves the rest unplanned. You saved it because the pace matched the kind of weekend you wanted.",
      },
      {
        id: "trip-3",
        kind: "Collection",
        title: "Cafés worth sitting in",
        publisher: "Saved collection / Sample",
        tag: "Cafés",
        excerpt: "Three places to stop, all within a short walk.",
        passage:
          "The collection holds three cafés close to the walk in the video. One is good in the morning, one has a table outside, and one stays open if the weather turns. You saved them together so the weekend would have somewhere to pause.",
      },
    ],
    findings: [
      {
        text: "The article is the quiet weekend you saved and never booked.",
        sources: ["trip-1"],
      },
      {
        text: "The video is the walk that made you want to go.",
        sources: ["trip-1", "trip-2"],
      },
      {
        text: "The collection is the cafés you kept for that same weekend.",
        sources: ["trip-3"],
      },
    ],
    takeaway:
      "The article, the walk, and the cafés are one trip. Index can find them from a single description.",
    connections: [
      "Train → A slow weekend",
      "Walk → The old streets",
      "Cafés → Somewhere to pause",
    ],
  },
  {
    id: "home",
    label: "Home",
    category: "Around the house",
    question: "Something about plants that don't need much light.",
    title: "The plants you meant to get.",
    description: "9 articles · 7 videos · 5 bookmarks",
    sources: [
      {
        id: "home-1",
        kind: "Article",
        title: "Plants that are fine in a dim room",
        publisher: "Saved article / Sample",
        tag: "Plants",
        excerpt: "A few plants will live happily away from the window.",
        passage:
          "A dim room does not have to stay empty. The article names a few plants that cope with indirect light and asks you to start with one, not a shelf of them. It also says to check the pot for drainage before you worry about anything else.",
      },
      {
        id: "home-2",
        kind: "Video",
        title: "How often they actually need water",
        publisher: "Saved video / Sample",
        tag: "Watering",
        excerpt: "Most of them were being watered too often.",
        passage:
          "The video shows a simple test: press a finger into the soil, and water only when the top feels dry. It spends a minute on the plants that prefer to dry out, which matches the ones in the article. That is the part you would want to watch again.",
      },
      {
        id: "home-3",
        kind: "Place",
        title: "The shop with the good pots",
        publisher: "Saved place / Sample",
        tag: "Shop",
        excerpt: "A small shop, ten minutes from home, with pots that drain.",
        passage:
          "You saved the shop because it is close and the pots have a hole in the bottom. The note beside it says to take the article with you and buy one plant, not five. Saturday morning is quieter than the afternoon.",
      },
    ],
    findings: [
      {
        text: "The article is the one about plants that cope with a dim room.",
        sources: ["home-1"],
      },
      {
        text: "The video shows how often those plants actually need water.",
        sources: ["home-1", "home-2"],
      },
      {
        text: "The place is the nearby shop you saved for the pot.",
        sources: ["home-3"],
      },
    ],
    takeaway:
      "The article, the watering video, and the shop are one small project. They were saved months apart.",
    connections: [
      "Dim room → A few plants",
      "Watering → Less often",
      "Shop → A pot that drains",
    ],
  },
  {
    id: "tech",
    label: "Tech",
    category: "Everyday",
    question: "That video about freeing space on my phone.",
    title: "The phone video you meant to watch.",
    description: "6 videos · 8 articles · 4 bookmarks",
    sources: [
      {
        id: "tech-1",
        kind: "Video",
        title: "Freeing space without losing your photos",
        publisher: "Saved video / Sample",
        tag: "Phone",
        excerpt: "Start with the apps you forgot were still there.",
        passage:
          "The video starts with the storage screen and asks you to look at apps you have not opened in months. Photos stay where they are until you choose which ones to move. The useful part is the order: unused apps first, then old downloads, then photos.",
      },
      {
        id: "tech-2",
        kind: "Article",
        title: "Where the photos actually go",
        publisher: "Saved article / Sample",
        tag: "Photos",
        excerpt: "A backup is only useful if you know how to get the pictures back.",
        passage:
          "The article explains a simple backup: turn it on, wait until it finishes, and check that a recent photo appears when you look from another screen. It warns you not to delete anything from the phone until that check works. You saved it beside the video.",
      },
      {
        id: "tech-3",
        kind: "Bookmark",
        title: "The setting you meant to turn on",
        publisher: "Saved bookmark / Sample",
        tag: "Backup",
        excerpt: "One switch, then leave the phone charging overnight.",
        passage:
          "The bookmark goes straight to the backup setting. The note says to plug the phone in before bed and leave it on the charger. In the morning, the photos should be copied and the phone should have room again.",
      },
    ],
    findings: [
      {
        text: "The video is the one about clearing space on your phone.",
        sources: ["tech-1"],
      },
      {
        text: "The article explains where the photos go before you delete anything.",
        sources: ["tech-1", "tech-2"],
      },
      {
        text: "The bookmark is the backup setting you saved and never opened.",
        sources: ["tech-3"],
      },
    ],
    takeaway:
      "The video, the article, and the setting are one small job. You saved them because the phone was full.",
    connections: [
      "Phone → Unused apps",
      "Photos → Back them up first",
      "Setting → Overnight",
    ],
  },
];
