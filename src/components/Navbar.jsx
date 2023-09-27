import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, navMedia } from "../constants";
import { menu, close } from "../assets";
import { logo, resume } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-13 h-8 object-contain' />
          <p className='text-white text-[20px] font-bold cursor-pointer flex '>
            Steven Le
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) =>
            nav.id === "resume" ? (
              <li key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(null)}>
                {/* Render something else for the resume link */}
                <a href={resume} title="Steven Le Resume" target="_blank">
                  {nav.title}
                </a>
              </li>
            ) : (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            )
          )}
        </ul>

        <ul className='list-none hidden sm:flex flex-row gap-5'>
          {navMedia.map((nav) =>
            (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:cursor-pointer`}
                style={{ width: "28px", height: "28px" }}
              >
                <div class="green-pink-gradient p-[1px] rounded-full cursor-pointer select-none">
                <a href={nav.link} target="_blank" rel="noopener noreferrer" >
                  <img
                    src={nav.image}
                    alt={nav.link}
                    className="w-[28px] h-[28px] object-contain transition-filter duration-150 hover:brightness-75"
                  />
                </a>
                </div>
              </li>
            )
          )}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => 
              nav.id === "resume" ? (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(null);
                  }}
                >
                  <a href={resume} title="Steven Le Resume" target="_blank">{nav.title}</a>
                </li>
              ) : (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
              ))}
            </ul>

            <ul className='list-none flex justify-center items-start flex-row gap-4 mt-4'>
              {navMedia.map((nav) =>
                (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-white" : "text-secondary"
                    } hover:cursor-pointer`}
                    style={{ width: "28px", height: "28px" }}
                  >
                    <div class="green-pink-gradient p-[1px] rounded-full cursor-pointer select-none">
                    <a href={nav.link} target="_blank" rel="noopener noreferrer" >
                      <img
                        src={nav.image}
                        alt={nav.link}
                        className="w-[28px] h-[28px] object-contain transition-filter duration-150 hover:brightness-75"
                      />
                    </a>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
