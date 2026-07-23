import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Trade Order Management System (OMS)",
    repo: "https://github.com/Rimtar10/OMS",
    tech: ["Java", "MySQL", "JDBC", "JUnit"],
    summary:
      "A fintech grade order management system simulating real stock exchange mechanics.",
    description:
      "Handles order submission, matching, trade execution, and portfolio tracking. A Price Time Priority matching engine built on PriorityQueues processes partial and full fills and cancellations across instruments concurrently. Applies Factory, Observer, and Strategy design patterns across a layered Model, Repository, Service, Engine architecture, with Singleton managed JDBC persistence.",
    tags: ["Full Stack"],
    featured: true,
  },
  {
    name: "GoCart",
    repo: "https://github.com/Rimtar10/E-Commerce",
    tech: ["PostgreSQL", "Express.js", "React.js", "Node.js"],
    summary: "A full stack, multi vendor ecommerce platform.",
    description:
      "Features AI powered product description generation, an admin dashboard for store and user management, secure Google Sign In, multiple payment methods, a coupon system, a Plus Membership subscription tier, and a ratings and reviews engine.",
    tags: ["Full Stack"],
    featured: true,
  },
  {
    name: "BetterGov.lb",
    repo: "https://github.com/qyu-qyu/BetterGov",
    tech: ["Laravel", "PHP", "Blade", "MySQL"],
    summary: "A government services portal, built with a team of 4.",
    description:
      "Led feature scoping and code review while implementing Laravel resource controllers, MVC architecture, and relational database design within academic deadlines.",
    tags: ["Full Stack"],
  },
  {
    name: "Envision",
    repo: "https://github.com/Rimtar10/Envision",
    tech: ["Flutter / Dart", "TFLite"],
    summary: "An assistive mobile app for visually impaired users.",
    description:
      "An evolved, cross platform successor to KindStep, targeting Android, iOS, web, Windows, macOS, and Linux from one codebase. Delivers real time object detection, emotion and face recognition, and proximity alerts, with on device TFLite inference. Resolved distance estimation accuracy issues and Android build and AGP version conflicts to keep real time inference stable on device.",
    tags: ["Mobile", "AI / ML"],
    featured: true,
  },
  {
    name: "Billo",
    repo: "https://github.com/Rimtar10/Billo",
    tech: ["React Native"],
    summary: "A cross platform, peer to peer money transfer app.",
    description:
      "Handles user authentication, transaction flows, and account management for peer to peer money transfers.",
    tags: ["Mobile"],
  },
  {
    name: "Jarvis 2.0 (AI Chatbot)",
    repo: "https://github.com/Rimtar10/jarvis-2.0",
    tech: ["Python", "NLP", "Generative AI"],
    summary: "A conversational AI assistant.",
    description:
      "Handles intent recognition, dynamic response generation, and multi turn dialogue through generative AI APIs.",
    tags: ["AI / ML"],
  },
  {
    name: "Face Recognition Attendance System",
    repo: "https://github.com/Rimtar10/face-recognition",
    tech: ["Python", "OpenCV", "Deep Learning"],
    summary: "An automated, real time attendance system.",
    description:
      "Uses deep learning face embeddings to power a full pipeline, from image capture through preprocessing to live identification and logging.",
    tags: ["AI / ML"],
  },
  {
    name: "Movie Recommendation System",
    repo: "https://github.com/Rimtar10/movie-recommender-system",
    tech: ["Python", "Scikit-learn", "Pandas", "NLP"],
    summary: "A content based movie recommendation engine.",
    description:
      "Applies TF-IDF vectorization and cosine similarity over a cleaned movie dataset to surface similar titles.",
    tags: ["AI / ML"],
  },
];

export const GITHUB_PROFILE = "https://github.com/Rimtar10";
