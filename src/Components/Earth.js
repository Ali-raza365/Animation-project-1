import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Sky() {
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: {
      transform: ["translateY(0)", "translateY(-100%)"],
    },
    timing: {
      easing: "steps(7, end)",
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity,
    },
    onReady: ({ playState, animate, animation }) => {
      // Triggered when the animation is ready to play (Google Chrome: available in v84+)
    },
    onUpdate: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the running state or changes state
    },
    onFinish: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
    },
  });
  return (
    <>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img
            ref={ref}
            id="red-queen_and_alice_sprite"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
            alt="Alice and the Red Queen running to stay in place."
          />
        </div>
      </div>
    </>
  );
}
