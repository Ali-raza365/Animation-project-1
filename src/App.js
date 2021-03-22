import "./App.css";
import Earth from "./Components/Earth";
import Scenery from "./Components/Scenery";
import useWebAnimations from "@wellyshen/use-web-animations";
import { useEffect } from "react";


function App() {
////////redQueen_alice animation //
  var playbackrateRQ = 1;
	var playbackrateBG = 0;

const spriteFrames = [
  { transform: 'translateY(0)' },
  { transform: 'translateY(-100%)' }   
];
const spirteTiming = {
  easing: "steps(7, end)",
  direction: "reverse",
  duration: 600,
  playbackRate: playbackrateRQ,
  iterations: Infinity,
};
const redQueen_alice = useWebAnimations({
  keyframes: spriteFrames,
  timing: spirteTiming,
});

//////// background foreground animation //////

const sceneryFrames = [
  { transform: "translateX(100%)" },
  { transform: "translateX(-100%)" },
];

const sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity,
  playbackRate: playbackrateBG,
};
const sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity,
  playbackRate: playbackrateBG,
};

const background1 = useWebAnimations({
  keyframes: sceneryFrames,
  timing: sceneryTimingBackground,
});
const background2 = useWebAnimations({
  keyframes: sceneryFrames,
  timing: sceneryTimingBackground,
});
const foreground1 = useWebAnimations({
  keyframes: sceneryFrames,
  timing: sceneryTimingForeground,
});
const foreground2 = useWebAnimations({
  keyframes: sceneryFrames,
  timing: sceneryTimingForeground,
});

//////// adjustBackgroundPlayback animation /////

const adjustBackgroundPlayback = () => {
  if (playbackrateRQ < 0.8) {
   let back = (playbackrateRQ / 2) * -1   
    playbackrateBG = back  >0 ?back :0  ;
  } else if (playbackrateRQ > 1.2) {
    playbackrateBG = playbackrateRQ / 2;
  } else  {
    playbackrateBG = 0;
  
  }

    foreground1.getAnimation().playbackRate = playbackrateBG;
    foreground2.getAnimation().playbackRate = playbackrateBG;
    background1.getAnimation().playbackRate = playbackrateBG;
    background2.getAnimation().playbackRate = playbackrateBG;
};

useEffect(() => {
  const fganimation = foreground1.getAnimation();
  fganimation.currentTime = fganimation.effect.getTiming().duration / 2;


  const bganimation = background1.getAnimation();
  bganimation.currentTime = bganimation.effect.getTiming().duration / 2;

  setInterval(() => {
    /* Set decay */

    if (playbackrateRQ > 0.4) {
      playbackrateRQ *= 0.9;
      redQueen_alice.getAnimation().playbackRate = playbackrateRQ;
    }
      adjustBackgroundPlayback();
  }, 3000);

  document.addEventListener("click", () => {
    playbackrateRQ *= 1.4;
    redQueen_alice.getAnimation().playbackRate = playbackrateRQ;
    adjustBackgroundPlayback();
  });
});
  return (
    <>
      <div className="wrapper">
        <div className="sky" />
        <Earth  Ref={redQueen_alice.ref}/>
        <Scenery
          background1={background1.ref}
          background2={background2.ref}
          foreground1={foreground1.ref}
          foreground2={foreground2.ref}
        />
    </div>
    </>
  );
}

export default App;
