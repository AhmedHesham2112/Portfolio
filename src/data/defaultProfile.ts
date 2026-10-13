import { CandidateProfile } from '../types/profile';

export const defaultCandidateProfile: CandidateProfile = {
  personal: {
    name: "Ahmed Hesham Khattab",
    title: "Frontend Software Engineer | React & React Native",
    email: "ahmed.hesham.khattab97@gmail.com",
    phone: "+201118534446",
    location: "Cairo, Egypt",
    links: {
      github: "https://github.com/AhmedHesham2112",
      linkedin: "https://www.linkedin.com/in/ahmed-hesham-khattab"
    }
  },
  target_roles: [
    "Frontend Software Engineer (React / Next.js / TypeScript)",
    "Mobile Developer (React Native / Expo)",
    "Senior Frontend Developer (State Architecture & UI Systems)"
  ],
  work_preference: {
    locations: [
      "Remote Worldwide",
      "Cairo, Egypt",
      "MENA / Gulf (UAE, Saudi Arabia)",
      "Europe & UK Remote",
      "US Remote"
    ],
    employment_types: ["Full-time", "Contract", "Remote"],
    remote_only: false
  },
  summary: "Frontend Software Engineer with strong expertise in developing performant web applications and cross-platform mobile apps using React, React Native (Expo), TypeScript, Redux Toolkit, and RTK Query. Proven track record at Marcomz Ai contributing to production applications (SBS Broker App, Marcomz.ai, and Marcomz Canvas Tool) by refactoring complex architectures, optimizing state management, hardening multilingual RTL interfaces, and developing canvas-based design engines.",
  technical_skills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "Python", "C", "HTML5", "CSS3"],
    frontend_core: ["ReactJS", "React Native (Expo)", "Next.js", "Tailwind CSS", "NativeWind", "Konva.js", "Responsive UI/UX", "RTL Support"],
    state_and_data: ["Redux Toolkit", "RTK Query", "React Query", "Context API", "REST APIs", "Custom Hooks"],
    canvas_and_graphics: ["Konva.js (HTML5 Canvas)", "Layer Grouping & Multi-Selection", "Vector Scaling & Rotation", "High-Res PNG / QR Code Export"],
    tools_and_platforms: ["Git", "GitHub", "VS Code", "Linux", "Bash", "Postman", "Vite", "Metro Bundler", "Firebase"]
  },
  experience: [
    {
      id: "exp-1",
      role: "Frontend Developer",
      company: "Marcomz Ai",
      company_url: "https://marcomz.ai/",
      period: "Aug 2025 – Present",
      projects: ["SBS Broker App", "Marcomz.ai", "Marcomz Canvas Tool"],
      tech_stack: ["React", "React Native (Expo)", "TypeScript", "Redux Toolkit", "RTK Query", "React Query", "Konva.js", "Tailwind CSS / NativeWind"],
      highlights: [
        "SBS Broker App Architecture & Modularization: Spearheaded a large-scale refactor of core real-estate broker modules (Marketplace, Inventory/Request Forms, Submission Status, Phone Verification), breaking monolithic files into modular components and 10+ custom hooks to decouple business logic and elevate maintainability.",
        "In-App Media Integration & Viewer: Engineered an in-app Google Drive media viewer using React Native WebView with safe-area insets, dynamic URL extraction from listing notes/chats, and external app fallbacks to ensure seamless property photo access.",
        "Bilingual Localization & RTL Hardening: Resolved critical Arabic RTL layout and font clipping issues in form controls; developed centralized multilingual API error parsing (formatApiError) and configured dynamic Accept-Language headers in RTK Query base queries.",
        "Media Upload Constraints & App Stability: Implemented 10-image upload limits with live counters and real-time warnings; resolved upload failure edge-cases and stabilized authentication session expiration flows.",
        "State Management Migration (Marcomz.ai): Migrated Facebook campaign creation from Context API to Redux Toolkit, restructuring campaign and ad set state management to eliminate redundant re-renders and enable multi-ad configurations.",
        "Analytics & Batch Campaign Operations: Enhanced Facebook Insights and Leads modules with multi-selection bulk operations and auto ad-account selection; resolved table freezing under heavy datasets and built batch campaign editing by ID.",
        "Canvas Engine Enhancement (Konva.js): Extended the browser-based graphics editor with multi-selection bounding boxes, layer grouping, zoom/pan controls, PNG/QR export, and transformation bug fixes, significantly improving editor stability."
      ]
    },
    {
      id: "exp-2",
      role: "Frontend Developer – Career Transition & Specialization",
      company: "ALX Software Engineering",
      period: "May 2023 – Nov 2024",
      tech_stack: ["JavaScript", "TypeScript", "React", "Python", "C", "Git"],
      highlights: [
        "Shifted from electrical engineering to software engineering with rigorous full-time immersion (avg. 60+ hrs/week).",
        "Completed 200+ complex programming challenges, algorithms, team sprints, and peer-reviewed code submissions.",
        "Engineered WatchMate, an end-to-end movie discovery application with auth, real-time search, and optimized React Query caching.",
        "Earned verified ALX Software Engineering Certification in Frontend Specialization."
      ]
    }
  ],
  projects: [
    {
      id: "proj-canvas",
      name: "Interactive Web Canvas Design Tool",
      category: "canvas",
      description: "A production browser-based vector graphics editor and design engine built with React, TypeScript, and Konva.js.",
      tech_stack: ["React", "TypeScript", "Konva.js", "HTML5 Canvas", "Tailwind CSS"],
      live_url: "https://web-canvas-tool.vercel.app/",
      featured: true,
      highlights: [
        "Developed an interactive browser graphics editor supporting layer reordering, grouping, scaling, and rotation.",
        "Engineered client-side high-resolution PNG generation and dynamic QR-code export pipelines directly from canvas vector trees.",
        "Implemented multi-selection bounding boxes with customized transformation handles and responsive zoom/pan viewports."
      ]
    },
    {
      id: "proj-sbs",
      name: "SBS Broker App (Mobile Platform)",
      category: "mobile",
      description: "High-throughput mobile application built with React Native and Expo for real estate brokers to manage listings, client requests, and inventory.",
      tech_stack: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "RTK Query", "NativeWind", "React Native WebView"],
      featured: true,
      highlights: [
        "Refactored monolithic broker modules into 10+ reusable custom hooks and clean presentation components.",
        "Engineered in-app Google Drive media viewer with safe-area insets, dynamic note URL extraction, and native external app fallbacks.",
        "Hardened Arabic RTL layout and font support, ensuring zero clipping across complex form controls.",
        "Implemented 10-image limits with live counters, client-side validation, and centralized API error formatting."
      ]
    },
    {
      id: "proj-marcomz",
      name: "Marcomz.ai Marketing Automation Platform",
      category: "web",
      description: "AI-driven advertising campaign management and analytics platform serving enterprise marketers.",
      tech_stack: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
      live_url: "https://marcomz.ai/",
      featured: true,
      highlights: [
        "Migrated campaign creation flows from Context API to Redux Toolkit, eliminating excessive re-renders and enabling multi-ad setups.",
        "Built batch campaign editing by ID, multi-selection bulk operations, and auto ad-account selection.",
        "Eliminated performance freezes on dense Facebook Insights and Leads data tables."
      ]
    },
    {
      id: "proj-watchmate",
      name: "WatchMate — Movie Recommendation Platform",
      category: "fullstack",
      description: "Personalized movie recommendation and discovery web application with authentication, real-time search, and watchlist persistence.",
      tech_stack: ["ReactJS", "Tailwind CSS", "React Query", "Context API", "REST API"],
      live_url: "https://watchmate.pythonanywhere.com/",
      github_url: "https://github.com/AhmedHesham2112/WatchMate",
      featured: true,
      highlights: [
        "Optimized API caching and background fetching using React Query, drastically reducing redundant network calls.",
        "Implemented real-time debounced movie search, genre filtering, and responsive UI powered by 5+ custom hooks.",
        "Managed user watchlist and favorite states with Context API and LocalStorage persistence across sessions."
      ]
    }
  ],
  education: [
    {
      degree: "ALX Software Engineering Program – Frontend Specialization",
      institution: "ALX Africa",
      period: "2023 – 2024",
      details: "Rigorous 12-month software engineering program covering modern JavaScript, React, data structures, and distributed team projects.",
      certificate_url: "https://intranet.alxswe.com/certificates/PGTh6cFYnL"
    },
    {
      degree: "Professional Front-End Web Development Nanodegree",
      institution: "Udacity",
      period: "2023",
      details: "Advanced web fundamentals, responsive design, performance profiling, and asynchronous JavaScript web applications."
    },
    {
      degree: "B.Sc. in Electrical Engineering",
      institution: "Ain Shams University",
      period: "2015 – 2020",
      details: "Overall Grade: Good | Graduation Project: Excellent. Rigorous engineering discipline, analytical problem solving, and electrical systems."
    }
  ],
  certifications: [
    {
      name: "ALX Software Engineering Specialization (Frontend)",
      issuer: "ALX Africa",
      url: "https://intranet.alxswe.com/certificates/PGTh6cFYnL"
    },
    {
      name: "Professional Front-End Web Development Nanodegree",
      issuer: "Udacity"
    }
  ],
  languages: [
    { language: "Arabic", proficiency: "Native" },
    { language: "English", proficiency: "C1 (Full Professional Proficiency)" }
  ]
};
