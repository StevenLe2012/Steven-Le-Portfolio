import { React } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live_logo, youtube, live_logo_inverted } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const GetLinkButtons = ({
  source_code_link = null,
  youtube_demo_link = null,
  live_link = null,
}) => {
  const links = [
    { link: source_code_link, alt: "github source code", icon: github },
    { link: youtube_demo_link, alt: "youtube demo", icon: youtube },
    { link: live_link, alt: "live demo", icon: live_logo_inverted },
  ];

  return (
    <div className="absolute inset-0 flex flex-col items-end m-3 card-img_hover">
      {links
        .filter((link) => link.link)
        .map((link) => (
          <div key={link.alt} onClick={() => window.open(link.link, "_blank")}>
            <Tilt
              options={{ max: 45, scale: 1.15, speed: 450 }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={link.icon}
                  alt={link.alt}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            </Tilt>
          </div>
        ))}
    </div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  youtube_demo_link,
  live_link,
}) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full min-h-[400px] flex flex-col justify-between">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <GetLinkButtons
          source_code_link={source_code_link}
          youtube_demo_link={youtube_demo_link}
          live_link={live_link}
        />
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const userAgent = navigator.userAgent;
  //   setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
  // }, []);

  // const isDesktop = useMediaQuery("(min-width:600px)");

  // const IsDesktop = () => {
  //   const isDesktop = useMediaQuery({ query: "(min-width: 600px)" });
  //   if (isDesktop) {
  //     return true;
  //   }
  //   return false;
  // };

  // const isDesktop = IsDesktop();

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <b>Users are my first priority.</b> Every app I make, I ensure quality
          user experience. These following projects are briefly described,
          showing my various experiences and demonstrating my abilities. You can
          find more on my{" "}
          <a
            href="https://github.com/StevenLe2012"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>GitHub</u>
          </a>
          .
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          //   <div>
          //   {isDesktop ? (
          //     <ProjectCard index={index} {...project} />
          //   ) : (
          //     <motion.div variants={fadeInDevice(isDesktop, "up", "spring", index * 0.5, 0.75)}>
          //       <ProjectCard index={index} {...project} />
          //     </motion.div>
          //   )}
          // </div>
          <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <ProjectCard index={index} {...project} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
