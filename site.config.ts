export const site = {
  brand: "Index",
  meta: {
    title: "Index — Your internet memory, organized",
    description:
      "Index turns bookmarks, videos, articles, repositories, and collections into one searchable personal library. Search by what you remember.",
  },
  links: { app: "", docs: "", email: "hello@example.com" },
  hero: {
    badge: "Bookmarks. Videos. Articles. Repositories. Collections.",
    first: "Your internet memory,",
    accent: "organized.",
    description:
      "Everything you save. One intelligent place. Search by what you remember.",
    action: "Get started — it's free",
    navAction: "Get started",
    secondary: "See how it works",
  },
  intro: {
    badge: "You save it. We remember it.",
    first: "You save it.",
    accent: "We remember it.",
    description:
      "The internet is full of useful information. Index brings your saved content together so you can rediscover it later.",
    kinds: [
      {
        name: "Bookmarks",
        detail: "Your Chrome bookmarks, organized and searchable.",
      },
      {
        name: "Videos",
        detail: "YouTube videos you've saved, liked, and collected.",
      },
      {
        name: "Articles",
        detail: "The pages you knew you'd need someday.",
      },
      {
        name: "Repositories",
        detail: "Saved GitHub projects and technical resources.",
      },
      {
        name: "Collections",
        detail: "Saved Google content, in one library.",
      },
    ],
  },
  story: {
    badge: "Search by what you remember",
    heading: "You don't need the title.\nJust describe it.",
    description:
      "Index understands what you mean. A half-remembered video, article, or repository is enough.",
  },
  evidence: {
    badge: "Things you forgot you saved",
    first: "You know you saved it.",
    accent: "Ask, and find it.",
    description:
      "Thousands of bookmarks, videos, and articles. Describe what you need, and Index searches your whole library.",
  },
  examples: {
    badge: "Your saved content, connected",
    heading: "Topics find each other.\nEven years apart.",
    description:
      "A few corners of a personal library. Choose one and search the way you'd actually remember it.",
  },
  library: {
    badge: "Your personal knowledge graph",
    heading: "The more you save,\nthe more useful it becomes.",
    description:
      "Every resource adds another piece. Over time, Index learns the topics and connections across your library.",
    trees: [
      {
        name: "AI",
        children: ["LLMs", "RAG", "Agents", "Computer Vision"],
      },
      {
        name: "AWS",
        children: ["EC2", "ECS", "Lambda", "Infrastructure"],
      },
      {
        name: "Development",
        children: ["React", "TypeScript", "Docker", "System Design"],
      },
    ],
    careTitle: "Clean up your digital life",
    careLead:
      "Saved content shouldn't become a graveyard of forgotten links. Index can surface what needs a look.",
    care: [
      {
        title: "Broken links",
        detail: "Pages that no longer exist.",
      },
      {
        title: "Duplicates",
        detail: "Resources covering the same topic.",
      },
      {
        title: "Forgotten content",
        detail: "Things you saved years ago and never revisited.",
      },
      {
        title: "Unorganized resources",
        detail: "Content that doesn't belong to any collection.",
      },
    ],
    careNote: "Review. Organize. Delete. You stay in control.",
    privacyTitle: "Built around your privacy",
    privacy:
      "Your saved content is personal. Connect only the services you choose, disconnect whenever you want, and delete your data whenever you want. Your personal knowledge stays yours.",
  },
  pricing: {
    badge: "Start free",
    heading: "A library that starts with what you already saved.",
    description:
      "Connect the services you choose. Add room when the library grows.",
  },
  plans: [
    {
      id: "personal",
      name: "Free",
      description: "For the bookmarks you already have.",
      monthly: 0,
      yearly: 0,
      action: "Get started",
      featured: false,
      mark: "",
      features: [
        "Chrome bookmarks",
        "Search by meaning",
        "200 saved items",
        "Export or delete your data",
      ],
      checkout: { monthly: "", yearly: "" },
    },
    {
      id: "library",
      name: "Library",
      description: "For everything you meant to come back to.",
      monthly: 15,
      yearly: 12,
      action: "Choose Library",
      featured: true,
      mark: "Full library",
      features: [
        "YouTube, articles, GitHub, and Google",
        "Unlimited saved items",
        "Topics, connections, and collections",
        "Broken links, duplicates, and forgotten items",
      ],
      checkout: { monthly: "", yearly: "" },
    },
    {
      id: "archive",
      name: "Archive",
      description: "For a library you expect to keep for years.",
      monthly: 24,
      yearly: 19,
      action: "Keep everything",
      featured: false,
      mark: "",
      features: [
        "Everything in Library",
        "A personal knowledge graph",
        "Cleanup across your whole library",
        "Full export and deletion",
      ],
      checkout: { monthly: "", yearly: "" },
    },
  ],
  faq: {
    badge: "A few things to know",
    heading: "Before you connect anything.",
    items: [
      {
        question: "What can I bring into Index?",
        answer:
          "Chrome bookmarks, YouTube videos, articles and web pages, GitHub repositories, and saved Google content. You connect only the services you choose. This page uses three prepared libraries so you can try search, connections, and saved items without an account.",
      },
      {
        question: "How does search by meaning work?",
        answer:
          "Describe what you remember — a topic, a half-remembered title, the reason you saved it. Index looks across your library for the closest resources. The searches on this page are prepared examples. Nothing you type here is sent to an AI service.",
      },
      {
        question: "Do I have to organize it myself?",
        answer:
          "Saved content is grouped into topics, categories, and collections on its own. You can still review, move, and delete anything. There are no folders you have to maintain.",
      },
      {
        question: "Can Index help me clean up old saves?",
        answer:
          "It can surface broken links, duplicates, things you saved and never opened again, and items that sit outside a collection. You decide what to keep, organize, or delete.",
      },
      {
        question: "Who controls my data?",
        answer:
          "You do. Disconnect a service or delete your data whenever you want. This preview stores nothing: the examples run in your browser, and you can copy or download any result.",
      },
      {
        question: "What happens when I choose a plan?",
        answer:
          "Each plan button goes to its checkout link. This preview does not charge you or create an account. Until checkout links are added, Free opens the working example and paid plans start an email.",
      },
    ],
  },
  closing: {
    badge: "Your second brain for the internet",
    first: "Stop saving.",
    accent: "Start remembering.",
    description:
      "No complicated setup. No folders to maintain. Just connect, search, and rediscover.",
    action: "Get started — it's free",
  },
  footer: {
    line: "Your internet memory, organized.",
  },
} as const;
export type Plan = (typeof site.plans)[number];
