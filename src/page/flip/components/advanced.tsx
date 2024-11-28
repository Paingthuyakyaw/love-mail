import { Flip } from "gsap/Flip";
import gsap from "gsap";
import "../style/flip.style.css";
import { useRef, useState } from "react";

const Advanced = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const box = useRef<HTMLDivElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFlip = () => {
    // Capture the Flip state before changes
    const flipState = Flip.getState(".containers , .text-box");

    if (container.current) {
      container.current.classList.toggle("bg-zoom");
    }
    if (box.current) {
      box.current.classList.toggle("zoom");
    }

    // Animate with Flip
    Flip.from(flipState, {
      duration: 0.5,
      ease: "power1.inOut",
      // fade: true,
      onEnter: () => {
        gsap.fromTo(
          container.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        );
      },
      onLeave: () => {
        gsap.fromTo(
          container.current,
          { opacity: 1 },
          { opacity: 0, duration: 0.3 }
        );
      },
    });

    // Toggle classes and state
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      onClick={handleFlip}
      ref={container}
      className="containers flex items-center justify-center w-full"
    >
      <div
        ref={box}
        className="text-box bg-white shadow-lg rounded-md cursor-pointer border p-3 border-black w-[250px] text-justify"
      >
        {isExpanded
          ? `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ad
            sunt ipsum deserunt similique illum laboriosam eos ullam, voluptatibus,
            fugiat sequi distinctio soluta dolorem quidem labore doloremque culpa
            aperiam beatae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse tristique tincidunt risus, ac mollis libero consectetur in.`
          : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ad
            sunt ipsum deserunt similique illum laboriosam eos ullam.`}
      </div>
    </div>
  );
};

export default Advanced;
