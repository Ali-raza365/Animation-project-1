import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Earth({Ref}) {
  
  return (
    <>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img
            ref={Ref}
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
