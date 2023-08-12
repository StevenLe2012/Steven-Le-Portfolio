import EarthCanvas from "./Earth";
import BallCanvas from "./Ball";
import ComputersCanvas from "./Computers";
import StarsCanvas from "./Stars";
import InteractiveParticlesCanvas from "./InteractiveParticles";
import MagicCanvas from "./Magic";
import CreateParticles from "./CreateParticles";

import { preload } from "./magic_modified";


if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll))
  preload ();
else
  document.addEventListener("DOMContentLoaded", preload ); 

export { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas, InteractiveParticlesCanvas, MagicCanvas, CreateParticles };
