import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBackgroundContext } from './utils/background.jsx'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { BsArrowUp } from 'react-icons/bs'

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { appRef } = useBackgroundContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary' style={{ background: 'linear-gradient(to right, rgb(30, 10, 85), rgb(77, 50, 130), rgb(1, 0, 45))' }} ref={appRef} >
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>

      {showBackToTop && (
      <button
        className="fixed bottom-4 right-4 p-2 shadow cursor-pointer backToTop bg-primary text-white"
        onClick={handleBackToTop}
      >
        <BsArrowUp />
      </button>
    )}
    </BrowserRouter>
  );
}

export default App;
