import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Stagger = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef(null);
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.to(".box", {
        duration: 1,
        scale: 0.05,
        repeat: -1,
        yoyo: true,
        rotate: 360,
        borderRadius: 200,
        y: 30,
        repeatDelay: 0.5,
        ease: "power1.inOut",
        stagger: {
          amount: 1.5,
          grid: [3, 6],
          axis: "x",
          ease: "none",
          from: "end",
        },
      });
    },
    {
      scope: container,
    }
  );

  return (
    <div
      ref={container}
      className=" bg-black flex items-center justify-center h-screen"
    >
      <div className=" gap-4 grid grid-cols-6">
        {[...new Array(18)].map((_, id) => (
          <div
            key={id}
            className=" box  w-16 h-16 shadow-inner  shadow-green-200 bg-green-500 rounded-md "
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Stagger;
