import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const TimelineAnimation = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  const tl = useRef<any>(null);

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to(".red", { duration: 0.5, x: 500, borderRadius: 60 })
        .to(".green", { duration: 0.5, x: 600, borderRadius: 60 })
        .to(".zinc", { duration: 0.5, x: 700, borderRadius: 60 });
    },
    { scope: container }
  );

  const handleClick = contextSafe(() => {
    tl.current?.reversed(!tl.current.reversed());
  });

  return (
    <div ref={container} className=" m-10">
      <div className=" flex gap-5 flex-col">
        <div className=" red w-20 h-20 bg-red-500 rounded-md ">Hello</div>
        <div className=" green w-20 h-20 bg-green-500 rounded-md "></div>
        <div className=" zinc w-20 h-20 bg-zinc-500 rounded-md "></div>
      </div>

      <div className="">
        <button onClick={() => handleClick()}>Click</button>
      </div>
    </div>
  );
};

export default TimelineAnimation;
