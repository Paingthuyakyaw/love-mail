import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useRef } from "react";
import Advanced from "./components/advanced";

gsap.registerPlugin(useGSAP, Flip);

const FlipBox = () => {
  const group = useRef<HTMLDivElement | null>(null);

  const handleShuffle = () => {
    const flipState = Flip.getState(".group , .box");

    console.log(flipState);

    group.current && group.current.classList.toggle("flex-col");

    Flip.from(flipState, {
      absolute: true,
      duration: 0.2,
      stagger: 0.1,
      ease: "power1.inOut",
    });
  };

  return (
    <div className=" mx-10 my-20">
      <div className=" mb-5  flex justify-center">
        <button
          onClick={handleShuffle}
          className=" px-8 py-2 text-white bg-black rounded-full"
        >
          Shuffle{" "}
        </button>
      </div>
      <div
        ref={group}
        className=" group flex  overflow-hidden relative min-h-[150px] border gap-5  border-dashed border-black p-5"
      >
        {[...new Array(4)].map((_, id) => (
          <div className=" box bg-black  rounded-md text-white p-3" key={id}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            asperiores? In aut beatae odio et unde reiciendis adipisci itaque
            rerum, quaerat ullam ad? Hic quasi quidem obcaecati culpa cumque
            ullam.
          </div>
        ))}
      </div>

      <div className=" mt-10">
        <Advanced />
      </div>
    </div>
  );
};

export default FlipBox;
