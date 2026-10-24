export type Source = {
  id: string;
  kind: "Bookmark" | "Video" | "Article" | "Repository" | "Collection";
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
    id: "aws",
    label: "AWS",
    category: "Cloud",
    question: "Something about deploying Docker on AWS.",
    title: "Docker on AWS, still in your library.",
    description: "12 articles · 8 videos · 6 repositories · 3 discussions",
    sources: [
      {
        id: "aws-1",
        kind: "Article",
        title: "A small service on ECS",
        publisher: "Field notes / Sample article",
        tag: "ECS",
        excerpt: "A container can reach production without a platform team.",
        passage:
          "Start with one service, one task definition, and a load balancer you can explain. ECS is enough when the goal is to ship a container you already run locally. Leave the larger platform for the day you have more than one team deploying into it.",
      },
      {
        id: "aws-2",
        kind: "Video",
        title: "How the containers find each other",
        publisher: "Saved video / Sample",
        tag: "Docker",
        excerpt: "The useful part is the network between the containers.",
        passage:
          "Draw the container, the task, and the service before you open the console. The video spends most of its time on how those pieces discover one another, and only then on the buttons that create them. That order is what makes the deploy repeatable.",
      },
      {
        id: "aws-3",
        kind: "Repository",
        title: "harbor-notes",
        publisher: "Saved repository / Sample",
        tag: "Deploy notes",
        excerpt: "A short checklist for shipping a container to AWS.",
        passage:
          "The repository keeps a checklist beside the sample compose file: build, push, register the task, and confirm the service is healthy. Comments in the notes point back to the article and the video, so the three stay linked even if you open only one of them.",
      },
    ],
    findings: [
      {
        text: "The article is the one about running a container on ECS.",
        sources: ["aws-1"],
      },
      {
        text: "The video explains how those containers find each other.",
        sources: ["aws-2"],
      },
      {
        text: "The repository is the checklist you saved with both of them.",
        sources: ["aws-1", "aws-3"],
      },
    ],
    takeaway:
      "The deploy story is split across an article, a video, and a repository. They still belong together.",
    connections: [
      "Docker → ECS",
      "Article → The same cluster",
      "Checklist → The video",
    ],
  },
  {
    id: "react",
    label: "React",
    category: "Frontend",
    question: "The article I saved about React performance.",
    title: "React performance, from what you kept.",
    description: "24 articles · 11 videos · 9 repositories",
    sources: [
      {
        id: "react-1",
        kind: "Article",
        title: "Render less, on purpose",
        publisher: "Margin notes / Sample article",
        tag: "Performance",
        excerpt: "Most of the cost was a list rendering more than it needed to.",
        passage:
          "Measure the list before you memoize the whole tree. In this case the parent passed a new callback on every keystroke, so each row rendered again. Stabilize that callback, and the rest of the page can stay as it is.",
      },
      {
        id: "react-2",
        kind: "Video",
        title: "Watching a list re-render",
        publisher: "Saved video / Sample",
        tag: "Rendering",
        excerpt: "The profiler shows which row actually changed.",
        passage:
          "The video records a profiler session on a list of a few hundred rows. Highlighting shows one row changing and every sibling rendering with it. The fix demonstrated there is local to the row component, which is why the article and the video describe the same bug.",
      },
      {
        id: "react-3",
        kind: "Bookmark",
        title: "A note on measuring first",
        publisher: "Chrome bookmarks / Sample",
        tag: "Profiling",
        excerpt: "Save the measurement, then decide what to change.",
        passage:
          "The bookmark points at a short note: capture a profile, name the component that renders too often, and only then change the code. It sits with the article because both argue for one measurement before a handful of speculative fixes.",
      },
    ],
    findings: [
      {
        text: "The article is the one about a list that re-renders on every keystroke.",
        sources: ["react-1"],
      },
      {
        text: "The video shows that same list in the profiler.",
        sources: ["react-1", "react-2"],
      },
      {
        text: "The bookmark reminds you to measure before changing the tree.",
        sources: ["react-3"],
      },
    ],
    takeaway:
      "You saved the explanation, the recording, and the rule of thumb. Together they are the performance note.",
    connections: [
      "List → Re-render",
      "Profiler → The article",
      "Measure → Then change",
    ],
  },
  {
    id: "agents",
    label: "AI agents",
    category: "AI",
    question: "That GitHub project for building AI agents.",
    title: "The agent project you meant to open again.",
    description: "18 videos · 13 articles · 7 repositories",
    sources: [
      {
        id: "agents-1",
        kind: "Repository",
        title: "field-agent",
        publisher: "Saved repository / Sample",
        tag: "Agents",
        excerpt: "A small loop that calls tools and keeps a short memory.",
        passage:
          "The project is a single loop: read the request, choose a tool, store the result, and stop when the answer is grounded. The README is brief on purpose. It points at the video for the loop and the article for what the memory should keep.",
      },
      {
        id: "agents-2",
        kind: "Video",
        title: "A loop that uses tools",
        publisher: "Saved video / Sample",
        tag: "Tool use",
        excerpt: "Each step is visible, including the one that stops.",
        passage:
          "The video builds the loop in the open. You see the model pick a tool, the tool return a passage, and the loop decide it has enough. The stopping rule is the part worth replaying: continue only when the last result changed the answer.",
      },
      {
        id: "agents-3",
        kind: "Article",
        title: "What the agent should remember",
        publisher: "Reading shelf / Sample article",
        tag: "Memory",
        excerpt: "Keep the result that changed the answer, and let the rest go.",
        passage:
          "A long transcript makes the next step worse. Keep the tool result that changed the answer, the source it came from, and the question still open. Drop the intermediate guesses. That is the memory the repository expects you to plug in.",
      },
    ],
    findings: [
      {
        text: "The repository is the agent loop you starred and never finished reading.",
        sources: ["agents-1"],
      },
      {
        text: "The video shows that loop choosing a tool and knowing when to stop.",
        sources: ["agents-1", "agents-2"],
      },
      {
        text: "The article explains what the loop should keep in memory.",
        sources: ["agents-3"],
      },
    ],
    takeaway:
      "The project, the walkthrough, and the memory note are one thread. Index can find them from a single description.",
    connections: [
      "Repository → The loop",
      "Video → When to stop",
      "Article → What to remember",
    ],
  },
];
