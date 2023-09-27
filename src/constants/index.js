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
  mindscape_vr,
  pen_is_mightier,
  mind_tutor,
  cyber_orange,
  blood_divers,
  me,
  altmind,
  vhil,
  linkedin,
  github,
  outlook,
  altmind_name_logo,
  stanfordxr,
  apia,
  gates,
  questbridge,
  wu_tsai_hpa,
  stanford_square,
  codepath,
  codepath_inverted,
  swift,
  altmind_name,
  altmind_inverted,
  brs,

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

export const navMedia = [
  {
    id: "LinkedIn",
    image: linkedin,
    link: "https://www.linkedin.com/in/stevenle1337/",
  },
  {
    id: "GitHub",
    image: github,
    link: "https://github.com/StevenLe2012",
  },
  {
    id: "Email",
    image: outlook,
    link: "mailto:stevenle@stanford.edu",
  },
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
    name: "Swift",
    icon: swift,
  },
  {
    name: "Flutter",
    icon: flutter,
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
      "Led the development of an open-source, low-code developer tool for the Stanford Human Perception Lab to automate Vizzario API calls, simplifying deployment from over 300+ lines of code to one function call.",
      "Integrated the Unity Package SDK with well-documented code in 5 enterprise applications.",
      "Continuous Integration/Deployment Pipeline Integration, pull requests, code reviews, end-to-end testing.",
    ],
  },
  {
    title: "XR Developer Intern",
    company_name: "Big River Steel",
    icon: brs,
    iconBg: "#E6DEDD",
    date: "June 2023 - September 2023",
    points: [
      "Pioneered XR integration with Hololens 2 in the steel industry, redefining data center infrastructure management through hardware-software synergy and driving $2.6 billion in annual revenue.",
      "Created AR-enhanced remote assist with VMWare APIs, boosting data center monitoring by 60%.",
      "Dynamized remote-assist (Image/Speech Recognition) by 80%, leveraging Azure Cognitive Services.",
    ],
  },
  {
    title: "XR Developer Intern",
    company_name: "AltMind",
    icon: altmind_inverted,
    iconBg: "#383E56",
    date: "June 2023 - September 2023",
    points: [
      "Developed and published a therapeutic XR experience that facilitates diaphragmatic breathing, increasing tidal volume by 10.96%.",
      "Designed a proprietary algorithm to track and adapt the user's breathing pattern to gameplay, personalizing user experience.",
      "Implemented seamless functionality across all XR platforms, including Apple Vision Pro."
    ],
  },
  {
    title: "VR Developer & Research Intern",
    company_name: "Stanford Human Perception Lab",
    icon: stanford_med_school,
    iconBg: "#E6DEDD",
    date: "March 2022 - June 2023",
    points: [
      "Developed a VR branching narrative game using C# in Unity3D to passively screen for ADHD by recording biometric data with the HTC Vive Pro Eyes, estimated to increase ADHD screening sensitivity by 10%.",
      "Implemented real-world selective-attention tasks in VR and interactable UI/UX with Tobii eye tracking.",
      "Showcased product and poster presentation to over 100 researchers at two separate conferences.",
    ],
  },
  {
    title: "VR Developer & Research Assistant",
    company_name: "Stanford Social and Learning Lab",
    icon: stanford,
    iconBg: "#383E56",
    date: "Jan 2022 - June 2022",
    points: [
      "Led the development of a new experiment to simulate a real-world psychology study in VR using Python and the object-centric simulation environment iGibson, doubling the amount of data collected per subject.",
      "Increased pilot participant studies by 65% and coded received data using Datavyu to measure how humans think and behave in embodied, interactive virtual reality.",
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
    name: "Mindscape VR",
    description:
      "Award-winning meditative and therapeutic VR experience at the Metaverse Creators Hackathon using OpenAI’s ChatGPT and Meta’s Wit.AI. By using immersive technology, we can increase the effectiveness of how we treat real-life issues such as mental health disorders and other psychological conditions",
    tags: [
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "VR",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
      {
        name: "Wit.AI",
        color: "pink-text-gradient",
      },
      {
        name: "Oculus Speech SDK",
        color: "pink-text-gradient",
      },
      {
        name: "Mental Health",
        color: "green-text-gradient",
      }
    ],
    image: mindscape_vr,
    source_code_link: "https://github.com/StevenLe2012/metaverse-creators-hackathon-23",
    youtube_demo_link: "https://youtu.be/IRxQi7047UI",
  },
  {
    name: "Pen is Mightier",
    description:
      "Two-player game that merges artistic fun, competitive madness, and fitness benefits in an immersive, high-paced environment. Players are given 20 seconds to recreate a drawing. After which, it is sent to be refined by Stable Diffusion and then the CLIP AI model judges the winner based on the best resemblance to the original image.",
    tags: [
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Netcode for GameObjects",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pytorch",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "CLIP",
        color: "pink-text-gradient",
      },
      {
        name: "Stable Diffusion",
        color: "pink-text-gradient",
      },
      {
        name: "VR",
        color: "green-text-gradient",
      },

      
    ],
    image: pen_is_mightier,
    source_code_link: "https://github.com/StevenLe2012/ImmerseGT-Hackathon-2023",
    youtube_demo_link: "https://www.youtube.com/watch?v=D622-WeCsV0",
  },
  {
    name: "Mind Tutor",
    description:
      "Personalized self-learning app powered by ChatGPT aimed to reduce company onboarding time and expenses by over 50%. After answering a series of questions, the app will generate a personalized curriculum of how to learn the material, followed by a quiz to test for understanding.",
    tags: [
      {
        name: "Flutter",
        color: "green-text-gradient",

      },
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
      {
        name: "Educational",
        color: "pink-text-gradient",
      },
    ],
    image: mind_tutor,
    source_code_link: "https://github.com/StevenLe2012/MindTutor",
    youtube_demo_link: "https://youtu.be/mBc-teEKO-0?si=RKvG4OsdHvVprQkk",
  },
  {
    name: "Blood Divers",
    description:
      "Educational VR experience that teaches players about their circulatory system. The players are a blood cell, swimming through their own veins, tasked with repairing a damage. The environment matches the players' heart rate (monitored by an Arudino sensor). This novel, fun and engaging way to learn about the human body will help students retain information better.",
    tags: [
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "Adruino",
        color: "pink-text-gradient"
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "VR",
        color: "green-text-gradient",
      },
      {
        name: "Educational",
        color: "pink-text-gradient",
      },
    ],
    image: blood_divers,
    source_code_link: "https://github.com/StevenLe2012/treehacks-hackathon-23",
    youtube_demo_link: "https://youtu.be/zH3GdwHmTME?si=47otebHoApIe-zwb",
  },
  {
    name: "Cyber Orange",
    description:
      "Newspaper website that allows journalists to inform 3000+ people during the height of COVID-19. This website revived the Orange Juice Newspaper Club, allowing 15+ journalist to continue writing about world events and keeping the community informed during a major time in need. I also mentored a new developer to continue updating the website.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",

      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Educational",
        color: "pink-text-gradient",
      },
    ],
    image: cyber_orange,
    source_code_link: "https://github.com/StevenLe2012/CyberOrange",
    live_link: "https://orangejuicenew.github.io/CyberOrange-master/",
  },
  {
    name: "Personal Website",
    description:
      "Welcome to my website! This is my first project using ThreeJS and React. I want to give special thanks to JavaScript Mastery for the ThreeJS template, which I heavily modified to my liking. I also modified the magical particles effect by Eli Shmerler to fit my website, learning about vertex and fragment shaders along the way. Hope you all enjoyed and learned a lot about me!",
    tags: [
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient"
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Shaders",
        color: "pink-text-gradient",
      },
      {
        name: "Vercel",
        color: "green-text-gradient",
      }
    ],
    image: me,
    source_code_link: "https://github.com/StevenLe2012/Steven-Le-Portfolio",
    live_link: "https://www.stevenlexr.com/",
  },
];

const programs = [
  {
    company: "StanfordXR",
    title: "Vice President of Events",
    icon: stanfordxr,
    date: "April 2023 - Present",
    description: "Spearheading Stanford's inaugural nationwide XR hackathon, “Immerse The Bay,” scheduled for November 10-12, 2023. Leading team of 10+ students to organize a 400 person event with 20+ sponsors.",
  },
  {
    company: "CS 11SI: Intro to VR Dev",
    title: "Teaching Assistant",
    icon: unity,
    date: "September 2023 - Present",
    description: "Teaching 30+ students VR development skills (Unity, Immersion, Narrative) twice a week. Designing curriculum, managing course logistic, and grading weekly projects.",
  },
  {
    company: "Virtual Human Interaction Lab",
    title: "VR Intensive Training Seminar",
    icon: vhil,
    date: "September 2023 - Present",
    description: "Building multiplayer social-VR worlds with Unity, Normcore, Blender, and Ready Player Me avatars in a year-long VR software engineering internship.",
  },
  {
    company: "Stanford University",
    title: "Residential Assistant",
    icon: stanford_square,
    date: "September 2023 - Present",
    description: "Nurturing an inclusive, safe community in my dorm to support 50+ students' health and wellbeing. Organizing events to foster a sense of belonging.",
  },
  {
    company: "CodePath",
    title: "IOS 101",
    icon: codepath_inverted,
    date: "September 2023 - Present",
    description: "Currently taking Intro to iOS Development and learning Swift, Xcode, and UIKit. Goal of building completed visionOS app.",
  },
  {
    company: "CodePath",
    title: "TIP 103",
    icon: codepath_inverted,
    date: "2023",
    description: "Completed Advanced Technical Interview Prep and learned data structures, algorithms, and system design.",
  },
  {
    company: "APIA Scholarship Program",
    title: "APIA Scholar",
    icon: apia,
    date: "2023",
    description: "Selected as one of 40 national AAPI community student leaders to receive the McDonald’s/APIA Scholarship for excellence in academics, community service, and leadership.",
  },
  {
    company: "Human Performance Alliance",
    title: "Wu Tsai Scholar",
    icon: wu_tsai_hpa,
    date: "2022",
    description: "Selected as one of 15 students conducting research in human performance. Presented VR + ADHD Screening research at the 2022 Human Perforamnce Alliance symposium to over 100 researchers.",
  },
  {
    company: "The Gates Scholarship",
    title: "Bill Gates Scholar",
    icon: gates,
    date: "2021",
    description: "Selected as one of 300 students nationwide to receive a a full-ride scholarship for exceptional student leaders from low-income households (0.8% acceptance rate).",
  },
  {
    company: "QuestBridge",
    title: "College Match Scholar",
    icon: questbridge,
    date: "2021",
    description: "Selected as one of 1464 students out of the 18,500 to receive a 4-year, full-ride scholarship, worth over $300,000, for low-income, first-generation, high-achieving students (7.9% acceptance rate).",
  },
];

export { services, technologies, experiences, testimonials, projects, programs };