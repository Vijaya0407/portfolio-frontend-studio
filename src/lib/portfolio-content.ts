export const profile = {
  name: "Donthu Vijaya Sri",
  shortName: "Vijaya Sri",
  role: "UI/UX Designer · Product Designer",
  tagline: "Designing intuitive experiences for a better tomorrow.",
  email: "vijayasridonthu@gmail.com",
  phone: "+91 79898 24727",
  location: "Jangareddygudem, Andhra Pradesh, India",
  summary:
    "Aspiring UI/UX Designer with a strong foundation in user-centered design, visual storytelling, and digital product design. Skilled in creating intuitive digital experiences, developing wireframes, and building interactive prototypes using Figma. Passionate about understanding user needs, improving usability, and creating impactful digital solutions through creative design and technology.",
} as const;

type PortfolioProject = {
  id: string;
  name: string;
  category: string;
  description: string;
  focus: string;
  artClass: string;
  artworkImage?: string;
  artworkAspectRatio?: number;
  caseStudyUrl?: string;
};

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: "verisight",
    name: "VeriSight",
    category: "Verification Platform · UI/UX Design",
    description:
      "Designed intuitive interfaces and high-fidelity prototypes for a verification platform using Figma. Created wireframes and user flows to simplify verification tasks and improve usability.",
    focus: "Verification flows",
    artClass: "project-art-verisight",
    artworkImage: "/verisight-case-study.png",
    artworkAspectRatio: 863 / 579,
    caseStudyUrl: "https://www.figma.com/proto/VvburjjN77wZ0kD2Co3CzZ/project-1--team-6?node-id=31-16&starting-point-node-id=31%3A16&t=aOpHi6qJN8f6Xbp9-1",
  },
  {
    id: "plantiva",
    name: "Plantiva",
    category: "Plant Ordering & Quality Check App",
    description:
      "Designed a user-friendly plant ordering application that enables users to explore, select and purchase plants. Created interfaces to help users understand plant quality and product details before ordering.",
    focus: "Plant discovery",
    artClass: "project-art-plantiva",
    artworkImage: "/plantiva-case-study.png",
    artworkAspectRatio: 610 / 316,
    caseStudyUrl: "https://www.figma.com/design/vZ0hFwF7XI3vBnbUqVT86L/plant-project?node-id=0-1&t=qmklWSjevFNPUBw9-1",
  },
  {
    id: "freshcart",
    name: "FreshCart",
    category: "Grocery Delivery App · Blackbucks",
    description:
      "Designed a grocery delivery application interface using Figma. Created user flows and UI screens for browsing, cart, checkout and order tracking.",
    focus: "Grocery delivery",
    artClass: "project-art-freshcart",
    artworkImage: "/freshcart-case-study.png",
    artworkAspectRatio: 590 / 476,
    caseStudyUrl: "https://www.behance.net/gallery/255299187/Grocery-app-Case-study",
  },
] as const;

export const experience = [
  {
    role: "Product UI/UX Designer",
    organization: "Blackbucks Education Pvt. Ltd.",
    dates: "May 2026 – July 2026",
    location: "Remote, India",
    details: [
      "Designed user interfaces and interactive prototypes using Figma.",
      "Conducted user research and wireframing to create intuitive designs.",
    ],
  },
  {
    role: "UI/UX Designer Trainee",
    organization: "Purplelane",
    dates: "September 2023 – July 2026",
    location: "Bhimavaram, Andhra Pradesh",
    details: [
      "Trained in user research, wireframing, and usability testing.",
      "Collaborated with mentors on real-world UI/UX projects.",
    ],
  },
  {
    role: "Member & Event Coordinator",
    organization: "IEI Student Chapter",
    dates: "September 2023 – July 2027",
    location: "Bhimavaram, Andhra Pradesh",
    details: [
      "Organized technical events, seminars, and workshops.",
      "Coordinated event activities and strengthened team collaboration.",
    ],
  },
] as const;

export const education = [
  {
    institution: "Sagi Rama Krishna Raju Engineering College",
    program: "B.Tech · Computer Science and Design",
    dates: "September 2023 – July 2027",
    result: "CGPA: 8.0/10.0",
    location: "Bhimavaram, Andhra Pradesh",
  },
  {
    institution: "Tirumala Mahila Junior Kalasala",
    program: "Class 11 & 12 · MPC",
    dates: "March 2021 – May 2023",
    result: "Percentage: 91.8%",
    location: "Rajahmundry, Andhra Pradesh",
  },
  {
    institution: "Viswabharathi English Medium School",
    program: "Class 10",
    dates: "April 2020 – March 2021",
    result: "Score: 600/600",
    location: "Gudivada, Andhra Pradesh",
  },
] as const;

export const skillGroups = [
  {
    title: "UI/UX Design",
    items: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Responsive Design",
      "Usability Testing",
      "User Flows",
    ],
  },
  {
    title: "Design Tools",
    items: ["Figma", "Adobe XD", "Photoshop", "Canva", "CapCut"],
  },
  {
    title: "Design Practices",
    items: [
      "Visual Design",
      "Typography",
      "Color Theory",
      "Design Systems",
      "User-Centered Design",
    ],
  },
  {
    title: "Coursework",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "AI", "Web Development", "Android Development"],
  },
] as const;

export const certifications = [
  "Cisco Cybersecurity",
  "C Programming",
  "Python",
  "UI/UX Designer Training · Purplelane (ongoing)",
] as const;