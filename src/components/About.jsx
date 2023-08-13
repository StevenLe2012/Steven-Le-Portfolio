import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { me, github, linkedin, outlook } from "../assets"

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <div
        variants={fadeIn("", "", 0.1, 1)}
        className="flex items-center min-[1000px]:flex-row flex-col-reverse">
          {/* Left Column */}
          <div className="flex flex-col items-center min-[1000px]:items-start">
            <p className="mt-4 text-secondary text-[17px] min-[1000px]:max-w-lg w-full leading-[30px]">
              Hey there! I'm Steven, a Junior studying Computer Science at
              Stanford University set to graduate with a Bachelor's and Master's
              by June 2025.I'm currently looking for a summer 2024 internship
              in software engineering or XR development.
              <br /> <br />
              With three years of experience, my diverse portfolio reflects
              my insatiable curiosity and drive to make a positive impact
              through innovation. From enhancing ADHD screening using VR
              to tailoring education through generative AI, I'm continually
              seeking fresh avenues to create positive change in our world.
              {/* <br /> <br />
              As StanfordXR's Vice President of Events, I'm leading the creation of Stanford's
              first nationwide XR hackathon. Last year, I organized a Vietnamese Culture Night for 700+ attendees as the Co-Chair of the Stanford Vietnamese Student Association. */}
              <br /> <br />
              I love working with people, and I'm always looking for new
              opportunities to grow. If this interests you, check out my
              resume and links below! And feel free to reach out at
              <a href="mailto:stevenle@stanford.edu"> <u>stevenle@stanford.edu</u> </a>
              if want to learn more and chat!
            </p>
          </div>
          
          {/* Right Column */}
          {/* Photo */}
          <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
            <div className="xs:w-[375px] w-full green-pink-gradient p-[2px] rounded-[100px] shadow-card">
              <div className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden">
                <img
                  src={me}
                  alt="Steven Le Profile Picture"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </Tilt>
        </div>

        <div class= "flex mt-6 gap-5">
              {/* LinkedIn Button */}
              <Tilt className="h-full max-[1000px]:my-14">
                <div class="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none">
                  <a href="https://www.linkedin.com/in/stevenle1337/" target="_blank" rel="noopener noreferrer" >
                    <div class="bg-tertiary rounded-full px-3 py-2 flex justify-evenly items-center">
                        <img src={linkedin} alt="LinkedIn Logo" class="w-[40px] h-[40px] object-contain" />
                        <p class="text-[21px]">LinkedIn</p>
                    </div>
                  </a>
                </div>
              </Tilt>

              {/* GitHub Button */}
              <Tilt className="h-full max-[1000px]:my-14">
                <div class="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none">
                  <a href="https://github.com/StevenLe2012" target="_blank" rel="noopener noreferrer" >
                    <div class="bg-tertiary rounded-full px-3 py-2 flex justify-evenly items-center">
                        <img src={github} alt="GitHub Logo" class="w-[40px] h-[40px] object-contain" />
                        <p class="text-[21px]">GitHub</p>
                    </div>
                  </a>
                </div>
              </Tilt>

              {/* Outlook Button */}
              <Tilt className="h-full max-[1000px]:my-14">
                <div class="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none">
                  <a href="https://github.com/StevenLe2012" target="_blank" rel="noopener noreferrer" >
                    <div class="bg-tertiary rounded-full px-3 py-2 flex justify-evenly items-center">
                        <img src={outlook} alt="Outlook Logo" class="w-[40px] h-[40px] object-contain" />
                        <p class="text-[21px]">Email</p>
                    </div>
                  </a>
                </div>
              </Tilt>

            {/* Resume */}
            <Tilt className="h-full max-[1000px]:my-14">
              <div class="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none">
                  <a href="https://www.example.com" download="" className="py-3 px-8 rounded-xl outline-none text-white font-bold z-10">
                    <span className="hidden sm:inline">Download</span> Resume
                  </a>
              </div>
            </Tilt>

            </div>
      {/* Links */}
      {/* <div className="flex mt-6 gap-5">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="bg-tertiary w-[50px] rounded-xl outline-none text-white font-bold shadow-md z-10" style={{ transform: 'translateY(-2.19125px) translateZ(0px)' }}>
            <img src="/assets/linkedInButton-550870e1.png" alt="LinkedIn icon" className="object-cover w-full" />
          </a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-tertiary w-[50px] rounded-xl outline-none text-white font-bold shadow-md shadow-primary z-10" style={{ transform: 'translateY(-2.19125px) translateZ(0px)' }}>
            <img src={github} alt="Github icon" className="object-cover w-full" />
          </a>
          <a href="https://www.example.com" download="" className="bg-[#33CC66] py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary z-10" style={{ transform: 'translateY(-2.19125px) translateZ(0px)' }}>
            <span className="hidden sm:inline">Download</span> Resume
          </a>
        </div> */}
        
        {/* Links */} {/* w-full flex flex-col items-center justify-center */}
        


      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
