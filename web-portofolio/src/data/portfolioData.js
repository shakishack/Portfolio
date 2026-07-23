export const portfolioData = {
  personal: {
    name: "Shakila Ardelina",
    shortName: "SHAKILA",
    subRole: "UI/UX Designer and Enthusiastic Frontend Developer",
    subTagline:
      "Focused on building responsive and visually appealing web applications from end to end.",
    profileImage: "/img/my-pfp.png",
    bio: '5th semester Information Systems student at UPN "Veteran" Jakarta with 3.92/4.00 GPA. Focused on building responsive and visually appealing web applications from end to end. As a highly enthusiastic and creative individual with advanced skills in UI/UX Design and Frontend Development, I use Figma to make attractive interfaces and bring them to life using TypeScript, JavaScript, HTML5, and CSS3. Beyond the frontend, I code and integrate APIs for seamless backend communication. I am deeply passionate about communicating my creative vision and delivering functional digital products that truly prioritize user needs.',
    opportunitiesPrefix: "Open to",
    opportunitiesRoles: ["UI/UX Design", "Frontend", "Software Development"],
    opportunitiesSuffix: "Opportunities",
    tagline: [
      "My name is Shakila Ardelina. Tech enthusiast with a passion for UI/UX Design and Frontend Development. Come get to know more about me and my work ;)",
    ],
    email: "shakila.ardelina@gmail.com",
    location: "Tangerang, Indonesia",
    whatsappUrl: "https://wa.me/6287839076250",
    cvUrl:
      "https://drive.google.com/file/d/125kLOxp1kAJSt8T4_kAIUFZb9OjVBSxS/view?usp=drive_link",
    portfolioPdfUrl:
      "https://drive.google.com/file/d/1-hlHWSNS3qi46AMnGAyWJXgABe_gZii1/view?usp=sharing",
    githubUrl: "https://github.com/shakishack",
    linkedinUrl: "https://www.linkedin.com/in/shakilaardelina/",
    instagramUrl: "https://www.instagram.com/shakilarde/",
  },
  heroTags: ["UI/UX Design", "Frontend Development", "Software Development"],
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Experiences", href: "#experiences" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contacts", href: "#contacts" },
  ],
  experiences: [
    {
      id: 1,
      role: "VICE HEAD OF COMMUNICATION & INFORMATION BUREAU",
      organization: 'Senat FIK UPN "Veteran" Jakarta',
      period: "01/2026 - Present",
      description:
        "Directed the overarching visual identity, design strategy, and promotional campaigns to elevate the faculty's public presence. Supervised staff in content publication while assisting bureau's head with campus-wide partnerships and driving social media audience engagement.",
      highlight: false,
    },
    {
      id: 2,
      role: "MEMBER OF KSM VETERANTECH",
      organization: 'UPN "Veteran" Jakarta',
      period: "11/2025 - Present",
      description:
        "Completed Frontend Web Development study club coursework from basic to beginner levels. Applied core coding concepts by building real web projects.",
      highlight: true,
    },
    {
      id: 3,
      role: "STAFF OF COMMUNICATION & INFORMATION BUREAU",
      organization: 'Senat FIK UPN "Veteran" Jakarta',
      period: "01/2025 - 01/2026",
      description:
        "Managed digital visual branding and core assets across social platforms, driving social media growth by +58% on Instagram and +67% on TikTok. Executed promotional campaigns for university senate activities while serving as MC for major live programs.",
      highlight: false,
    },
    {
      id: 4,
      role: "STAFF OF CREATIVE MEDIA",
      organization: 'SPORTAVEST UPN "Veteran" Jakarta',
      period: "09/2025 - 10/2025",
      description:
        "Managed visual identity and designed engaging social media assets for SPORTAVEST, ensuring strict brand consistency across digital platforms while capturing live event documentation for promotional campaigns.",
      highlight: false,
    },
    {
      id: 5,
      role: "FREELANCE DIGITAL ILLUSTRATION",
      organization: "Independent",
      period: "2020 - Present",
      description:
        "Managed end-to-end custom digital illustration commissions for 50+ global clients from concept to final render. Maintained a 97% client satisfaction rate through transparent communication and efficient iterative workflows.",
      highlight: false,
    },
  ],
  projectCategories: ["All", "Web", "UI Design"],
  projects: [
    {
      id: 1,
      category: "Web",
      image: "/img/siera-stakeholder.png",
      title: "SIERA",
      subtitle: "UI/UX Designer",
      tags: ["Figma", "UI"],
      description:
        "Contributed as a UI/UX Designer for the PATRIBERA UPNVJ orientation platform, partnering with other teams to deliver a seamless digital experience. Utilized Figma to collaboratively build a scalable design system and structure responsive layouts for both mobile and desktop Stakeholder views.",
      buttons: [
        {
          label: "View Live Project",
          primary: true,
          link: "https://siera.veterantech.id/",
        },
      ],
    },
    {
      id: 2,
      category: "Web",
      image: "/img/pojok-teduh.png",
      title: "Pojok Teduh",
      subtitle: "Frontend Developer",
      tags: ["Next.js", "React", "Tailwind CSS"],
      description:
        "Collaborative Capstone Project for KSM Veterantech. Built a responsive web platform helping students and workers discover quiet urban spaces. Engineered smart facility/atmosphere filtering, Admin/User role access, location insights with satisfaction scores, and Google Maps integration.",
      buttons: [
        {
          label: "Github",
          primary: false,
          link: "https://github.com/nailahmarsa/capstone.git",
        },
        {
          label: "Live Project",
          primary: true,
          link: "https://pojokteduh-capfin.vercel.app/",
        },
      ],
    },
    {
      id: 3,
      category: "UI Design",
      image: "/img/elmora.png",
      title: "ELMORA",
      subtitle: "UI/UX Designer",
      tags: ["Figma", "UI", "UX", "Maze"],
      description:
        "Mobile app connecting local wooden furniture artisans with consumers, designed via Design Thinking & UCD methodologies. As UI/UX Designer, I created wireframes, interactive prototypes, and seamless user flows for product discovery, price sorting, and checkout. Validated usability via Maze testing (SEQ metric) with high success rates.",
      buttons: [
        {
          label: "View Project's Report",
          primary: true,
          link: "https://drive.google.com/file/d/1KENtd8KLlDi3DKRunFGstBfhx9q1WRUH/view?usp=sharing",
        },
      ],
    },
    {
      id: 4,
      category: "Web",
      image: "/img/midoka.png",
      title: "Midoka Matcha",
      subtitle: "Frontend Developer",
      tags: ["HTML5", "CSS3", "JavaScript"],
      description:
        "Dynamic web platform for a premium matcha brand crafted with modern, elegant aesthetics. As Frontend Developer, I built an intuitive, responsive interface featuring interactive menu showcases, smooth navigation, and a user-centered layout for effortless brand engagement.",
      buttons: [
        {
          label: "View Github",
          primary: true,
          link: "https://github.com/shakishack/Midoka-Mactha---Final-Project.git",
        },
      ],
    },
    {
      id: 5,
      category: "UI Design",
      image: "/img/foundit.png",
      title: "Foundit",
      subtitle: "UI/UX Designer",
      tags: ["Figma", "UI"],
      description:
        "Centralized Lost & Found mobile platform designed to streamline manual item reporting and retrieval. As UI/UX Designer using a Design Thinking framework, I created a clean, intuitive interface for users to effortlessly report lost items, search lost-and-found listings, and securely claim belongings.",
      buttons: [
        {
          label: "View Project's Report",
          primary: true,
          link: "https://docs.google.com/document/d/1E3FYB6uGRx3kIXwDy0byweq07Eb9aBmOYhpSMNLPZt8/edit?usp=sharing",
        },
      ],
    },
    {
      id: 6,
      category: "UI Design",
      image: "/img/maxim.png",
      title: "Maxim",
      subtitle: "UI/UX Designer",
      tags: ["Figma", "UI", "Heuristic"],
      description:
        "UI/UX redesign for the MAXIM app resolving usability inefficiencies and confusing user flows through a UCD framework. Redesigned 3 core screens: Homepage, Orders tracking, and Main Menu navigation. Validated design decisions through quantitative UEQ surveys and expert Heuristic Evaluation.",
      buttons: [
        {
          label: "View Project's Report",
          primary: true,
          link: "https://docs.google.com/document/d/1HoJf5kdQbN0-OAideeFL-O_ACATuipNbq-71T54trTc/edit?tab=t.0#heading=h.oqpzwhcrzu65",
        },
      ],
    },
  ],
  skillCategories: [
    {
      id: 1,
      icon: "Code",
      title: "Frontend Development",
      description:
        "Building responsive, maintainable, and visually appealing web interfaces.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      id: 2,
      icon: "Palette",
      title: "UI/UX Design",
      description: "Designing clean layouts and user-friendly interfaces.",
      skills: ["Figma", "Maze", "Wireframes", "Prototype", "UI Design"],
    },
    {
      id: 3,
      icon: "Server",
      title: "Backend Development",
      description: "Working with backend fundamentals and RESTful APIs.",
      skills: ["Node.js", "REST APIs"],
    },
    {
      id: 4,
      icon: "Database",
      title: "Database",
      description: "Designing and managing efficient database solutions.",
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      id: 5,
      icon: "Terminal",
      title: "Programming Languages",
      description:
        "Programming languages used in academic and practical projects.",
      skills: ["C", "C++", "Python", "Java", "JavaScript"],
    },
    {
      id: 6,
      icon: "Wrench",
      title: "Tools",
      description:
        "Using various tools to enhance productivity and streamline workflows.",
      skills: [
        "Git",
        "Github",
        "VS Code",
        "Postman",
        "Figma",
        "Canva",
        "Google Workspace",
      ],
    },
  ],
  achievements: [
    {
      id: 1,
      title: "IBM Skillsbuild - AI Coursework",
      description:
        "Successfully completed 3 specialized courses: Build an AI Agent, Introduction to Large Language Models, and Code Troubleshooting with IBM Bob.",
      certificateUrl:
        "https://drive.google.com/drive/folders/1PXG2zmqnh5CqfijOynTxHB7ED2Jxo2q8?usp=sharing",
      buttonLabel: "View Certificate",
    },
    {
      id: 2,
      title: "Frontend Basic - KSM Android",
      description:
        "Completed basic frontend web development training and coursework organized by KSM Android UPNVJ, achieving the Best Project award.",
      certificateUrl:
        "https://drive.google.com/file/d/1her1dhhdxeBZEwUDEySama7fQIJ0L7hj/view?usp=drive_link",
      buttonLabel: "View Certificate",
    },
  ],
  // Fallback for single achievement reference
  achievement: {
    title: "IBM Skillsbuild - AI Coursework",
    description:
      "Successfully completed 3 specialized courses: Build an AI Agent, Introduction to Large Language Models, and Code Troubleshooting with IBM Bob (Jul 2026).",
    certificateUrl:
      "https://drive.google.com/file/d/1PXG2zmqnh5CqfijOynTxHB7ED2Jxo2q8/view?usp=sharing",
    buttonLabel: "View Certificate",
  },
};
