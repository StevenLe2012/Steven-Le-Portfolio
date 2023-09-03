import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap/all';
import chroma from 'chroma-js';

const Background = createContext();

export const BackgroundProvider = ({ children }) => {
  const [currentBG, setCurrentBG] = useState('#050816');
  let appRef = useRef(null);

  useEffect(() => {
    const calculateGradient = () => {
      const firstColor = currentBG;
      const secondColor = chroma(firstColor).darken().hex();
      const thirdColor = chroma(firstColor).brighten().hex();
      const forthColor = chroma(firstColor).darken().hex();


      return `linear-gradient(to right, ${firstColor},${thirdColor}, ${secondColor})`;
    };

    const gradient = calculateGradient();

    gsap.to(appRef.current, {
      duration: 1,
      background: gradient,
    });
  }, [currentBG]);

  return (
    <Background.Provider value={{ setCurrentBG, appRef }}>
      {children}
    </Background.Provider>
  );
};

export const useBackgroundContext = () => useContext(Background);