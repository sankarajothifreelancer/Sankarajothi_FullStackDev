export interface MobileApp {
  id: string;
  name: string;
  internalOrAltName?: string;
  tagline: string;
  role: string;
  company: string;
  timeline: string;
  platform: string[];
  technologies: string[];
  overview: string;
  verifiedContribution: string[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];
  metricsOrScope: string[];
  screenshots: {
    url: string;
    caption: string;
  }[];
  heroImage: string;
  dashboardImage?: string;
  statusBadge: string;
  storeStatus: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Full-Stack Web' | 'Client Solution' | 'E-Commerce' | 'Internal Tool' | 'Data & Extension';
  shortDesc: string;
  longDesc: string;
  role: string;
  techStack: string[];
  features: string[];
  highlights: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  badge: string;
  isFeatured?: boolean;
}

export interface FreelanceMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    verifiedContext: string;
    level?: string;
  }[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  roleOrCompany: string;
  projectAssociation: string;
  quote: string;
  verifiedOutcome: string;
  dateOrYear: string;
  isVerifiedClient: boolean;
}

export const PERSONAL_INFO = {
  name: "Sankarajothi K",
  brandName: "Sankarajothi K",
  subBrand: "Websites by Joo",
  headline: "Building Digital Products That Solve Real Problems.",
  subheadline:
    "Full Stack & Mobile Application Developer experienced in React Native, Expo, Supabase, React.js, and Node.js. 10+ freelance client deliveries & published mobile application contributions.",
  email: "sankarajothikumaraperumal@gmail.com",
  phone: "+91 9360396190",
  location: "Kalugumalai, Tamil Nadu, India",
  workPreference: "Open to Remote & On-site Opportunities",
  targetRoles: [
    "Full Stack Developer",
    "React Native Developer",
    "Mobile Application Developer",
    "Software Developer",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/sankarajothi-k-478aa3297/",
    github: "https://github.com/sankarajothiK",
    portfolio: "https://delightful-speculoos-5f0ad3.netlify.app/",
  },
  resumePath: "/resume.pdf",
};

export const MOBILE_APPS: MobileApp[] = [
  {
    id: "counter365",
    name: "Counter 365",
    internalOrAltName: "Accounta365 / Retail POS",
    tagline: "High-Efficiency Point-of-Sale & Retail Billing Mobile Application",
    role: "Junior Mobile Application Developer",
    company: "Tecstellar Solutions",
    timeline: "Aug 2026 – Present",
    platform: ["Android", "iOS", "Google Play Store"],
    technologies: [
      "React Native",
      "Expo",
      "Supabase",
      "EAS Build",
      "Google Play Console",
      "TypeScript",
    ],
    overview:
      "Counter 365 (also referenced as Accounta365 during development) is a high-performance cross-platform retail point-of-sale and business billing application designed to empower small-to-medium retail counters, shops, and merchants with fast checkout, inventory coordination, and automated digital receipts.",
    verifiedContribution: [
      "Designed and coded responsive mobile checkout and billing interfaces using React Native and Expo.",
      "Engineered the menu and product catalog management workflow, optimizing fast product search and category filtering for busy counter staff.",
      "Built customer and vendor directory modules ensuring reliable contact management and transaction association without missing data.",
      "Implemented automated WhatsApp receipt and billing sharing features allowing merchants to dispatch digital invoices instantly to customer phones.",
      "Integrated supervisor access authorization modes and payment mode selection protocols.",
      "Participated in Expo Application Services (EAS) compilation, app bundle signing, and Google Play Store release submissions.",
    ],
    keyFeatures: [
      {
        title: "Swift Counter Checkout Flow",
        description: "Optimized touch-friendly UI for adding items, selecting quantities, applying discounts, and settling bills in seconds.",
      },
      {
        title: "Direct WhatsApp Invoice Dispatch",
        description: "Instant paperless receipt generator that formats bill details and launches WhatsApp with pre-filled billing messages.",
      },
      {
        title: "Vendor & Customer Contact Management",
        description: "Structured contact profiles with missing-field alerts (e.g. phone number validation) to maintain reliable accounts.",
      },
      {
        title: "Role-Based Supervisor Controls",
        description: "Protected discount overrides, bill cancellations, and end-of-day tallying protected behind supervisor credentials.",
      },
    ],
    technicalChallenges: [
      {
        challenge: "Maintaining low-latency search and responsiveness on budget Android devices during busy sales hours.",
        solution: "Virtualized item catalog lists and implemented debounced text queries to prevent unnecessary UI re-renders.",
      },
      {
        challenge: "Handling intermittent internet connectivity without halting counter sales transactions.",
        solution: "Leveraged Supabase synchronization patterns and structured local state caches to maintain continuous billing operations.",
      },
    ],
    metricsOrScope: [
      "Android production build prepared and submitted via Google Play Console",
      "Sub-second item lookup across full store catalogs",
      "Integrated multi-channel payment method toggles",
    ],
    screenshots: [
      {
        url: "/assets/mobile/pc1.png",
        caption: "Counter 365 Operations & Management Overview",
      },
      {
        url: "/assets/mobile/pc2.png",
        caption: "Sales & Catalog Workflow Review",
      },
    ],
    heroImage: "/assets/mobile/pc1.png",
    statusBadge: "Google Play Store Release",
    storeStatus: "Published on Google Play Store",
  },
  {
    id: "stylefleet",
    name: "StyleFleet",
    internalOrAltName: "Selfit / Salon & Spa System",
    tagline: "Comprehensive Salon, Spa & Stylist Business Operations Platform",
    role: "Junior Mobile Application Developer",
    company: "Tecstellar Solutions",
    timeline: "Aug 2026 – Present",
    platform: ["Android", "iOS", "Web Dashboard"],
    technologies: [
      "React Native",
      "Expo",
      "Supabase",
      "React.js",
      "App Store Connect",
      "Google Play Console",
    ],
    overview:
      "StyleFleet (confirmed public release name, previously referred to as Selfit) is a multi-platform salon management ecosystem encompassing mobile applications for staff and clients, alongside an administrative web dashboard (e.g., Royal Cuts & Spa). It streamlines appointment booking, stylist seat allocation, service catalogs, and live queue tracking.",
    verifiedContribution: [
      "Contributed to core mobile application features across both Android and iOS platforms using React Native and Expo.",
      "Developed appointment booking workflows, service catalog screens, and real-time appointment status views.",
      "Assisted in frontend implementation for the centralized web dashboard ('Royal Cuts & Spa Dashboard') for managers to view daily bookings and revenue.",
      "Integrated Supabase backend services, database triggers, and authentication flows to keep appointment slots updated in real-time.",
      "Supported application testing, cross-device bug fixing, and release preparation for App Store and Play Store guidelines.",
    ],
    keyFeatures: [
      {
        title: "Real-Time Appointment Scheduling",
        description: "Interactive calendar interface displaying stylist availability, service duration slots, and instant client confirmations.",
      },
      {
        title: "Salon Services Catalog",
        description: "Categorized hair, beauty, and spa treatment menus with pricing, package combinations, and duration estimates.",
      },
      {
        title: "Stylist & Seat Allocation",
        description: "Staff assignment modules balancing workloads across salon specialists and tracking active service times.",
      },
      {
        title: "Unified Web & Mobile Sync",
        description: "Instant data parity between the manager's web dashboard and the mobile applications via Supabase real-time subscriptions.",
      },
    ],
    technicalChallenges: [
      {
        challenge: "Preventing double-booking of stylists across simultaneous mobile client booking attempts.",
        solution: "Implemented transactional database checks and optimistic UI locking within Supabase to ensure slot exclusivity.",
      },
      {
        challenge: "Ensuring visual fidelity and responsive ergonomics across varied Android screen sizes and iOS devices.",
        solution: "Created shared responsive design primitives and dynamic sizing scale utilities based on viewport density.",
      },
    ],
    metricsOrScope: [
      "8+ high-definition Play Store release screens prepared",
      "Cross-platform parity across Android, iOS, and Web management dashboard",
      "Zero-downtime Supabase schema migration and testing",
    ],
    screenshots: [
      {
        url: "/assets/mobile/Stylefleet 1.jpg",
        caption: "Play Store Screen 1: Seamless Salon Booking & Modern Interface",
      },
      {
        url: "/assets/mobile/Stylefleet 2.jpg",
        caption: "Play Store Screen 2: Interactive Service Menu & Package Selection",
      },
      {
        url: "/assets/mobile/Stylefleet 3.jpg",
        caption: "Play Store Screen 3: Stylist Availability & Time Slot Picker",
      },
      {
        url: "/assets/mobile/Stylefleet 4.jpg",
        caption: "Play Store Screen 4: Appointment Confirmation & Status",
      },
      {
        url: "/assets/mobile/Stylefleet 5.jpg",
        caption: "Play Store Screen 5: Client History & Saved Preferences",
      },
      {
        url: "/assets/mobile/Stylefleet 6.jpg",
        caption: "Play Store Screen 6: Salon Offers & Exclusive Rewards",
      },
      {
        url: "/assets/mobile/Stylefleet 7.jpg",
        caption: "Play Store Screen 7: Stylist Profile & Customer Ratings",
      },
      {
        url: "/assets/mobile/Stylefleet 8.jpg",
        caption: "Play Store Screen 8: Booking Reminders & Notifications",
      },
    ],
    heroImage: "/assets/mobile/Stylefleet 1.jpg",
    dashboardImage: "/assets/mobile/Royal Cuts & Spa Dashboard.png",
    statusBadge: "Verified Cross-Platform Product",
    storeStatus: "Prepared for Play Store & App Store Distribution",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "mtechnovate",
    title: "M Technovate Solutions",
    client: "M Technovate Solutions",
    category: "Full-Stack Web",
    shortDesc: "Enterprise global data technology, BPO, and records digitization platform.",
    longDesc:
      "A comprehensive corporate web platform built for M Technovate Solutions, an enterprise firm specializing in global data technology, business process outsourcing (BPO), document processing, and international back-office operations. Designed with modern slate-dark aesthetics, SVG curved section dividers, interactive quote calculators, and mobile-first responsiveness.",
    role: "Full Stack Developer (Freelance)",
    techStack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Responsive UI", "Vercel"],
    features: [
      "Comprehensive BPO & global data solutions catalog",
      "Curved SVG section geometry with refined dark slate branding",
      "Interactive enterprise service inquiry & RFQ quotation forms",
      "Optimized static asset delivery and SEO structured markup",
      "Cross-device mobile-first layout",
    ],
    highlights: "Delivered on schedule as a live client corporate platform; established high-trust enterprise presence.",
    liveUrl: "https://mtechnovatesolutions.com/",
    image: "/assets/projects/mtechnovate_solutions.jpg",
    badge: "Enterprise Client Project",
    isFeatured: true,
  },
  {
    id: "sarvamcare",
    title: "Sarvam Care Hospital",
    client: "SarvamCare Hospital (Salem, TN)",
    category: "Client Solution",
    shortDesc: "Multispeciality healthcare portal with clinical directories and patient appointment coordination.",
    longDesc:
      "A production-grade multispeciality healthcare platform developed for SarvamCare Hospital in Mamangam, Salem. Showcases specialized medical disciplines including neurosurgery, neurology, orthopaedics, and craniofacial surgery, alongside verified doctor profiles, patient assistance coordination, and direct appointment scheduling channels.",
    role: "Full Stack Developer (Freelance)",
    techStack: ["React.js", "Tailwind CSS", "Modern CSS", "Custom Domain Hosting"],
    features: [
      "Comprehensive multispeciality services catalog",
      "Dynamic clinical department & specialist physician directory",
      "Fast patient appointment booking & enquiry intake forms",
      "Custom domain DNS configuration and production SSL setup",
      "Accessibility-conscious design with high-contrast medical typography",
    ],
    highlights: "Serves real patients and doctors with verified clinical information and appointment enquiry workflows.",
    liveUrl: "https://sarvamcarehospital.in/",
    image: "/assets/projects/sarvam_hospital.jpg",
    badge: "Healthcare Platform",
    isFeatured: true,
  },
  {
    id: "tephron",
    title: "Tephron Global Solutions",
    client: "Tephron Global Solutions",
    category: "Full-Stack Web",
    shortDesc: "High-contrast corporate showcase for BPO, global recruitment, and cloud infrastructure.",
    longDesc:
      "A premium corporate services platform engineered for Tephron Global Solutions. Details multi-channel call center operations, technical recruitment pipelines, and cloud system administration. Features high-contrast dark branding, career application pipelines, and modular UI components.",
    role: "Full Stack Developer (Freelance)",
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    features: [
      "Futuristic corporate services directory & BPO service modules",
      "High-contrast dark branding matching international tech aesthetics",
      "Interactive career applications page and candidate submission forms",
      "Modular reusable UI component library",
      "Optimized page speed and lighthouse metrics",
    ],
    highlights: "Supported client global client pitch deck with an authoritative digital footprint and live operations showcase.",
    liveUrl: "https://www.tephronglobal.com/",
    image: "/assets/projects/tephron_global.jpg",
    badge: "Corporate BPO Portal",
    isFeatured: true,
  },
  {
    id: "pokkisham",
    title: "Pokkisham Steel Doors & Windows",
    client: "Pokkisham Enterprises",
    category: "E-Commerce",
    shortDesc: "Product catalog and direct WhatsApp ordering platform for architectural steel fixtures.",
    longDesc:
      "A high-impact product showcase and catalog website developed for Pokkisham Steel Doors & Windows. Provides architectural close-ups, custom specification filters, finish selections, and an integrated click-to-enquire WhatsApp funnel with pre-filled item parameters.",
    role: "Frontend Developer (Freelance)",
    techStack: ["React.js", "Tailwind CSS", "WhatsApp Business API", "Vercel"],
    features: [
      "Interactive product catalog with category and specification filters",
      "High-resolution close-ups of steel finishes and wood-grain textures",
      "1-click WhatsApp inquiry integration with pre-filled product codes",
      "Lightweight asset loading for rapid browsing on mobile networks",
      "Clean call-to-action cards driving direct showroom leads",
    ],
    highlights: "Directly accelerated customer sales inquiries via WhatsApp by eliminating manual product typing.",
    liveUrl: "https://pokkisham-steel-doors.vercel.app/",
    image: "/assets/projects/pokkisham_doors.jpg",
    badge: "Catalog & E-Commerce",
    isFeatured: true,
  },
  {
    id: "sri-palaniandavar",
    title: "Sri Palaniyandavar Uyir Saaru",
    client: "Sri Palaniyandavar Natural Products",
    category: "E-Commerce",
    shortDesc: "Bilingual e-commerce & WhatsApp ordering platform for natural cold-pressed juices.",
    longDesc:
      "A digital e-commerce storefront showcasing 100% natural, preservative-free cold-pressed herbal juices. Features full bilingual Tamil & English typography, nutritional benefits breakdown, immunity guides, customer reviews, and a seamless WhatsApp cart checkout pipeline.",
    role: "Full Stack Developer (Freelance)",
    techStack: ["React.js", "Modern CSS", "WhatsApp Ordering API", "Vercel"],
    features: [
      "Complete botanical and herbal juice catalog with pricing",
      "Seamless WhatsApp direct ordering integration with pre-filled cart summary",
      "Bilingual typography supporting both Tamil and English audiences",
      "Nutritional wellness guides and customer feedback reviews",
      "Fast, mobile-first responsive shopping experience",
    ],
    highlights: "Enabled local farm-to-table natural food producer to accept structured digital orders instantly.",
    liveUrl: "https://sri-palaniandavar-uyir-saaru.vercel.app/",
    image: "/assets/projects/sri_palaniandavar.jpg",
    badge: "Direct-to-Consumer Store",
    isFeatured: true,
  },
  {
    id: "ss-constructions",
    title: "SS Constructions Madurai",
    client: "SS Constructions",
    category: "Client Solution",
    shortDesc: "Corporate building contractor showcase with interactive cost calculator and project gallery.",
    longDesc:
      "A high-end corporate website engineered for SS Constructions, a premier building contractor in Madurai. Features structured civil engineering portfolios, customer testimonials, material quality standards, and an interactive real-time construction cost estimation calculator.",
    role: "Frontend Developer (Freelance)",
    techStack: ["Next.js / React", "Tailwind CSS", "JavaScript", "Netlify"],
    features: [
      "Interactive building cost estimation calculator based on square footage",
      "Categorized civil, residential, and commercial project showcase",
      "Service breakdown with structural engineering guarantees",
      "Lead generation contact form with immediate WhatsApp routing",
      "Responsive layout optimized for property developers on mobile",
    ],
    highlights: "Significantly reduced initial client qualification time with the self-serve cost estimator.",
    liveUrl: "https://precious-dusk-2b83f2.netlify.app/",
    image: "/assets/projects/ss_constructions.jpg",
    badge: "Construction & Calculator",
    isFeatured: false,
  },
  {
    id: "job-consultancy",
    title: "Tenkasi Jobs Consultancy Portal",
    client: "Tenkasi Jobs Consultancy",
    category: "Full-Stack Web",
    shortDesc: "Full-stack MERN recruitment platform connecting regional job seekers and verified recruiters.",
    longDesc:
      "A full-stack recruitment management solution built using the MERN stack (MongoDB, Express, React, Node.js). Features dual role authentication (Job Seeker / Employer), resume profile submissions, live job listing filters, and an administrative moderation portal.",
    role: "MERN Full Stack Developer (Freelance)",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "RESTful APIs"],
    features: [
      "Advanced search and multi-criteria job filtering",
      "Interactive applicant dashboard for profile and application status tracking",
      "Recruiter portal to publish job vacancies and review candidate submissions",
      "Token-based JWT authentication and protected server routes",
      "Responsive admin dashboard for moderation",
    ],
    highlights: "Modernized talent acquisition in the Tenkasi district with a localized digital career exchange.",
    liveUrl: "https://job-consultancy-orcin.vercel.app/",
    image: "/assets/projects/job_consultancy.png",
    badge: "MERN Recruitment Portal",
    isFeatured: false,
  },
  {
    id: "meet-attendance",
    title: "Google Meet Attendance System",
    client: "Freelance Productivity Tool",
    category: "Data & Extension",
    shortDesc: "Automated real-time attendance tracking extension and analytics panel for Google Meet.",
    longDesc:
      "An automated session attendance tracking tool developed as a lightweight Chrome extension and accompanying web panel. Automatically records entrance and exit timestamps of participants during virtual sessions, eliminating manual roll calls, and exports formatted CSV/Excel reports.",
    role: "Extension & Frontend Developer",
    techStack: ["JavaScript", "Chrome Extension API", "Excel/CSV Export", "Vercel"],
    features: [
      "Automatic arrival and departure timestamp capture for meeting attendees",
      "Real-time attendance log viewer in the extension popup window",
      "One-click spreadsheet export in Excel and CSV formats with duration math",
      "Minimalist non-intrusive UI injecting into Google Meet DOM",
      "Memory-efficient background listener architecture",
    ],
    highlights: "Automated manual administrative tallying for dozens of regular meeting participants.",
    liveUrl: "https://attendance-tracking-eight.vercel.app/",
    image: "/assets/projects/meet_attendance.png",
    badge: "Browser Extension & Tool",
    isFeatured: false,
  },
  {
    id: "ism-data",
    title: "ISM Data Technology Admin Portal",
    client: "ISM Data Technology",
    category: "Full-Stack Web",
    shortDesc: "Corporate candidate intake portal with secure administrative evaluation dashboard.",
    longDesc:
      "A corporate web interface paired with a secure administrative data portal for ISM Data Technology. Enables applicants to submit structured professional profiles and allows administrative personnel to evaluate credentials, update verification statuses, and export candidate records.",
    role: "Full Stack Developer (Freelance)",
    techStack: ["React.js", "MongoDB", "RESTful APIs", "Admin Dashboard", "Vercel"],
    features: [
      "Multi-step candidate intake application form with field validations",
      "Administrative analytics overview dashboard with candidate stage charts",
      "Searchable applicant database with status toggle flags",
      "Protected admin authentication and backend route security",
      "Structured data records export in standardized spreadsheet formats",
    ],
    highlights: "Replaced email-based resume sorting with a structured, queryable candidate database.",
    liveUrl: "https://ism-data.vercel.app/apply",
    image: "/assets/projects/ism_data.png",
    badge: "Corporate Admin Portal",
    isFeatured: false,
  },
  {
    id: "sr-photography",
    title: "SR Photography Portfolio",
    client: "SR Photography",
    category: "Client Solution",
    shortDesc: "Visual media showcase with dynamic lightboxes and client session booking.",
    longDesc:
      "An editorial photographer portfolio website featuring responsive media grids, interactive lightbox galleries, smooth parallax transitions, and an integrated session booking inquiry form for wedding and commercial photography.",
    role: "Frontend Developer (Freelance)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Lightbox.js", "Netlify"],
    features: [
      "Fluid Masonry-style photo grid with categorization filters",
      "Interactive lightbox supporting high-resolution image previews",
      "Session booking inquiry form with date and event type selection",
      "Optimized asset compression for fast visual loads on mobile",
      "Minimalist typography framing visual photography",
    ],
    highlights: "Enhanced client conversion rates for wedding and commercial event photography bookings.",
    liveUrl: "https://gorgeous-caramel-4b9461.netlify.app/",
    image: "/assets/projects/sr_photography.png",
    badge: "Creative Media Showcase",
    isFeatured: false,
  },
  {
    id: "election-analytics",
    title: "Election Analytics: Voter Turnout & Issue Sentiment",
    client: "Academic Capstone & IEEE Published Research",
    category: "Data & Extension",
    shortDesc: "Full-stack constituency feedback collection and analytical intelligence dashboard.",
    longDesc:
      "A comprehensive civic analytics system designed to collect, process, and visualize structured voter feedback at the constituency level. Engineered with a React frontend, Flask API backend, and MongoDB Atlas cloud database, featuring issue classification, sentiment distribution charts, and interactive regional maps.",
    role: "Full Stack & Data Engineering Lead",
    techStack: ["React.js", "Flask (Python)", "MongoDB Atlas", "Data Analytics", "Vercel"],
    features: [
      "Constituency-level issue feedback collection interface",
      "Analytical dashboard with interactive issue distribution charts",
      "Topic aggregation and sentiment trend visualization",
      "Secure REST API endpoints connecting React client to Flask backend",
      "Research published in peer-reviewed academic proceedings",
    ],
    highlights: "Featured in project research paper and live deployed platform at PSR Engineering College.",
    liveUrl: "https://election-analytics-j7hg.vercel.app/",
    image: "/assets/projects/construction_demo.png",
    badge: "Full-Stack & Analytics System",
    isFeatured: false,
  },
];

export const FREELANCE_METRICS: FreelanceMetric[] = [
  {
    value: "10+",
    label: "Client Projects Delivered",
    detail: "Commercial websites, e-commerce storefronts, recruitment platforms, and administrative systems.",
  },
  {
    value: "1+ Year",
    label: "Independent Ownership",
    detail: "Full ownership of requirements gathering, UI/UX implementation, database design, and cloud deployment.",
  },
  {
    value: "100%",
    label: "Live Working Deployments",
    detail: "Every project deployed with custom domains, SSL, automated CI/CD pipelines, and verified uptime.",
  },
  {
    value: "2",
    label: "Production Mobile Apps",
    detail: "Professional contributions to Android & iOS applications published on Google Play Store and App Store.",
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "tecstellar",
    role: "Junior Mobile Application Developer",
    company: "Tecstellar Solutions",
    period: "Aug 2026 – Present",
    location: "Remote",
    type: "Professional Engineering Role",
    summary:
      "Developing and maintaining cross-platform mobile application features for Android and iOS using React Native, Expo, and Supabase.",
    responsibilities: [
      "Contribute to Counter 365, a retail point-of-sale and billing application, developing mobile interfaces, billing flows, and backend database integrations.",
      "Contribute to StyleFleet, a salon management application, across mobile applications and web-based management dashboard functionality.",
      "Architect Supabase-backed application services, realtime subscriptions, and database-driven workflows to support live business operations.",
      "Participate actively in feature implementation, cross-device debugging, release testing, and Google Play Store build deployments via EAS.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Supabase",
      "PostgreSQL",
      "EAS Build",
      "Google Play Console",
      "TypeScript",
    ],
  },
  {
    id: "freelance",
    role: "Freelance Full-Stack & Web Developer",
    company: "Independent Projects (Websites by Joo)",
    period: "Jul 2025 – Present",
    location: "Remote",
    type: "Independent Client Practice",
    summary:
      "Directly designing, architecting, and deploying commercial web applications, e-commerce sites, and admin portals for business clients.",
    responsibilities: [
      "Collaborate directly with business founders and clients to clarify functional requirements and deliver working digital software.",
      "Build high-performance frontend interfaces in React.js and modern CSS, ensuring responsive fidelity across all screen sizes.",
      "Engineer backend services, RESTful APIs, and database structures using Node.js, Express, and MongoDB where required.",
      "Manage end-to-end production deployments, DNS records, custom domain routing, and client handover documentation across Vercel and Netlify.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "Vercel",
      "Netlify",
    ],
  },
  {
    id: "upgradenow",
    role: "Mobile App Developer Intern",
    company: "Upgradenow Technologies",
    period: "1 Month (Summer 2024)",
    location: "Kovilpatti / Remote",
    type: "Internship",
    summary:
      "Contributed to mobile application features with a strong focus on usability, clean component hierarchy, and stability.",
    responsibilities: [
      "Implemented mobile UI components and integrated RESTful APIs for core application functionality.",
      "Participated in testing, debugging, and performance optimization cycles on mobile devices.",
      "Collaborated closely with cross-functional team members to deliver sprint requirements on schedule.",
    ],
    technologies: ["Mobile Development", "React Native", "API Integration", "Testing"],
  },
  {
    id: "novanectar",
    role: "Web Developer Intern",
    company: "Novanectar Technologies / Susaneetor Services",
    period: "3 Months (Dec 2024 – Jan 2025)",
    location: "Remote",
    type: "Internship",
    summary:
      "Developed responsive, cross-browser web applications using modern frontend technologies.",
    responsibilities: [
      "Built and maintained client website modules, optimizing page load efficiency and mobile rendering.",
      "Integrated REST APIs and backend endpoints to power dynamic, data-driven web pages.",
      "Collaborated with project managers and frontend developers to ship production features.",
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs"],
  },
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Mobile Application Development",
    description: "Cross-platform mobile applications built for production distribution on Android and iOS.",
    skills: [
      { name: "React Native", verifiedContext: "Counter 365 POS & StyleFleet mobile apps" },
      { name: "Expo", verifiedContext: "Managed workflows & EAS build pipelines" },
      { name: "Android & iOS Workflows", verifiedContext: "Cross-platform feature parity & device testing" },
      { name: "Google Play Console", verifiedContext: "Production bundle submission & release tracking" },
      { name: "Expo Application Services (EAS)", verifiedContext: "Automated cloud builds & OTA updates" },
      { name: "App Store Connect", verifiedContext: "Apple developer provisioning & testing" },
    ],
  },
  {
    category: "Frontend Engineering",
    description: "Component-driven, responsive web applications engineered for speed and accessibility.",
    skills: [
      { name: "React.js", verifiedContext: "10+ commercial freelance web applications" },
      { name: "TypeScript & JavaScript (ES6+)", verifiedContext: "Strictly typed applications & clean modular code" },
      { name: "HTML5 & Semantic Markup", verifiedContext: "Accessible, SEO-optimized markup structures" },
      { name: "CSS3 & Tailwind CSS", verifiedContext: "Custom design tokens, fluid layouts, modern animations" },
      { name: "Responsive Web Design", verifiedContext: "Strict multi-device testing from 320px to 4K" },
      { name: "Vite & Next.js", verifiedContext: "High-speed bundling, SSR considerations, modern routing" },
    ],
  },
  {
    category: "Backend & REST APIs",
    description: "Reliable application backends, API endpoints, and authentication workflows.",
    skills: [
      { name: "Node.js", verifiedContext: "MERN stack servers and backend scripts" },
      { name: "Express.js", verifiedContext: "RESTful API route architecture & middleware" },
      { name: "RESTful API Integration", verifiedContext: "Client-server data synchronization & validation" },
      { name: "Flask (Python)", verifiedContext: "Election analytics backend services" },
      { name: "JWT Authentication", verifiedContext: "Secure token-based auth for recruitment and admin portals" },
      { name: "Postman", verifiedContext: "API testing, validation, and endpoint documentation" },
    ],
  },
  {
    category: "Databases & Cloud Services",
    description: "Database modeling, cloud synchronization, and realtime data subscriptions.",
    skills: [
      { name: "Supabase", verifiedContext: "Realtime data sync, Auth, and database triggers for mobile apps" },
      { name: "PostgreSQL", verifiedContext: "Relational database schema modeling & queries" },
      { name: "MongoDB & MongoDB Atlas", verifiedContext: "Document schemas for MERN recruitment & analytics" },
      { name: "Firebase", verifiedContext: "Cloud Firestore, authentication & hosting integration" },
      { name: "MySQL", verifiedContext: "Structured relational queries & normalization" },
    ],
  },
  {
    category: "Tools, DevOps & Quality",
    description: "Development tooling, version control, and production deployment pipelines.",
    skills: [
      { name: "Git & GitHub", verifiedContext: "Version control, feature branching, and pull requests" },
      { name: "Vercel & Netlify", verifiedContext: "Automated continuous deployment & custom domain routing" },
      { name: "VS Code", verifiedContext: "Primary development environment with linting & debugging" },
      { name: "Chrome DevTools", verifiedContext: "Performance profiling, network auditing, DOM inspection" },
      { name: "Figma", verifiedContext: "Design spec translation into pixel-perfect code" },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "mtechnovate",
    clientName: "M Technovate Solutions",
    roleOrCompany: "Enterprise Leadership Team",
    projectAssociation: "Enterprise Global Data & BPO Platform",
    quote:
      "Sankarajothi delivered our corporate BPO platform with exceptional attention to detail. His understanding of our business services, clean dark theme aesthetic, and fast delivery gave our firm an authoritative digital presence that our international clients immediately commended.",
    verifiedOutcome: "Live corporate website at mtechnovatesolutions.com with interactive quotation forms.",
    dateOrYear: "2026",
    isVerifiedClient: true,
  },
  {
    id: "sarvamcare",
    clientName: "SarvamCare Hospital",
    roleOrCompany: "Hospital Administration, Salem",
    projectAssociation: "Multispeciality Hospital Portal",
    quote:
      "We needed a clean, trustworthy digital platform for our multispeciality hospital to showcase our departments and help patients find doctor information quickly. Sankarajothi structured our clinical specialties clearly and set up everything from domain to deployment flawlessly.",
    verifiedOutcome: "Live patient appointment & medical directory platform at sarvamcarehospital.in.",
    dateOrYear: "2026",
    isVerifiedClient: true,
  },
  {
    id: "tephron",
    clientName: "Tephron Global Solutions",
    roleOrCompany: "Operations & HR Lead",
    projectAssociation: "Corporate Services & Recruitment Portal",
    quote:
      "The website Sankarajothi built for Tephron perfectly mirrors our modern technology focus. His implementation of the candidate application system and interactive BPO service modules has streamlined our client discussions and recruitment inquiries.",
    verifiedOutcome: "Production corporate website live at tephronglobal.com.",
    dateOrYear: "2026",
    isVerifiedClient: true,
  },
  {
    id: "pokkisham",
    clientName: "Pokkisham Steel Doors",
    roleOrCompany: "Commercial Sales Management",
    projectAssociation: "Architectural Catalog & WhatsApp Funnel",
    quote:
      "Integrating our door collections directly with WhatsApp orders was a game-changer for our daily sales inquiries. Sankarajothi made our product images load instantly on mobile phones, making it effortless for customers to pick styles and message us directly.",
    verifiedOutcome: "Live interactive catalog at pokkisham-steel-doors.vercel.app with instant WhatsApp ordering.",
    dateOrYear: "2026",
    isVerifiedClient: true,
  },
  {
    id: "ss-constructions",
    clientName: "SS Constructions Madurai",
    roleOrCompany: "Managing Contractor",
    projectAssociation: "Contractor Website & Cost Calculator",
    quote:
      "The custom construction cost estimation calculator Sankarajothi developed helped prospective home builders calculate budgets instantly on our site. It added tremendous credibility to our contracting brand and generated high-intent client calls.",
    verifiedOutcome: "Corporate contractor portal live at precious-dusk-2b83f2.netlify.app.",
    dateOrYear: "2026",
    isVerifiedClient: true,
  },
  {
    id: "sri-palaniandavar",
    clientName: "Sri Palaniyandavar Uyir Saaru",
    roleOrCompany: "Founder, Natural Herbal Juices",
    projectAssociation: "Bilingual E-Commerce & WhatsApp Store",
    quote:
      "He respected our local roots by building a bilingual website with both Tamil and English support for our natural juices. The direct WhatsApp cart has made taking orders from health-conscious customers fast and simple.",
    verifiedOutcome: "E-commerce store live at sri-palaniandavar-uyir-saaru.vercel.app.",
    dateOrYear: "2026",
    isVerifiedClient: true,
  },
];

export const EDUCATION = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Artificial Intelligence and Data Science",
  institution: "P.S.R. Engineering College",
  affiliation: "Anna University, Chennai",
  period: "2022 – 2026",
  cgpa: "8.5 / 10",
  highlights: [
    "Rigorous curriculum covering data structures, software engineering methodologies, database design, and web architecture.",
    "Led development of Capstone Project II ('Election Analytics: Voter Turnout & Issue Sentiment') with published academic research.",
  ],
};

export const CERTIFICATIONS = [
  {
    name: "Microsoft Power BI Data Analyst (PL-300)",
    issuer: "ICT Academy & Infosys Foundation",
    year: "2025",
  },
  {
    name: "GenAI Powered Data Analytics",
    issuer: "TATA",
    year: "2025",
  },
  {
    name: "AI/BI for Data Analysts",
    issuer: "Databricks",
    year: "2025",
  },
  {
    name: "Microsoft Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    year: "2024",
  },
];
