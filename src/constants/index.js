import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  vr,
  unity,
  software_engineer,
  generative_ai,
  unity_colorful,
  stanford,
  stanford_med_school,
  vizzario,
  big_river_steel,
  api,
  blender,
  csharp,
  firebase,
  c,
  cpp,
  dart,
  flutter,
  python,
  unity3d,
  unreal_engine,
  unreal_engine_inverted,
  postman,
  threejs_inverted,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Download Resume",
  }
];

const services = [
  {
    title: "VR/AR Developer",
    icon: vr,
  },
  {
    title: "Unity Developer",
    icon: unity,
  },
  {
    title: "Software Engineer",
    icon: software_engineer,
  },
  {
    title: "Generative AI Engineer",
    icon: generative_ai,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs_inverted,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Unity",
    icon: unity3d,
  },
  {
    name: "Unreal Engine",
    icon: unreal_engine_inverted,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Vizzario",
    icon: vizzario,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "XR Developer Intern",
    company_name: "Big River Steel",
    icon: big_river_steel,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "VR Developer & Research Intern",
    icon: stanford_med_school,
    iconBg: "#383E56",
    date: "March 2022 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "VR Developer & Research Assistant",
    company_name: "Stanford Social and Learning Lab",
    icon: stanford,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - June 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
