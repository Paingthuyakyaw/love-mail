import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MouseEvent, useRef, useState } from "react";
import Heart from "./icon/heart";
import Alert from "./components/alert";
import heBg from "./assets/heart.png";

const App = () => {
  gsap.registerPlugin(useGSAP);

  const xasix = useRef<any>(null);
  const yasix = useRef<any>(null);
  const container = useRef(null);
  const btn = useRef<any>(null);
  const [open, setOpen] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
      xasix.current = gsap.quickTo(".circle", "x", {
        duration: 0.3,
        ease: "power3",
      });

      yasix.current = gsap.quickTo(".circle", "y", {
        duration: 0.3,
        ease: "power3",
      });
    },
    { scope: container }
  );

  const { contextSafe: btnSafe } = useGSAP({
    scope: container,
  });

  const mouseHandler = contextSafe(
    (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      xasix.current(e.pageX);
      yasix.current(e.pageY);
    }
  );

  const handleCancelClick = btnSafe(() => {
    gsap.to(".cancel", {
      x: (Math.random() - 0.5) * 300, // -500 မှ +500 အတွင်း random
      y: (Math.random() - 0.5) * 200, // -300 မှ +300 အတွင်း random
      duration: 0.3,
      ease: "power2.out",
    });
  });

  return (
    <div
      style={{
        backgroundImage: `url(${heBg})`,
        backgroundSize: "400px",
      }}
      ref={container}
      onMouseMove={(e) => mouseHandler(e)}
      className="App flex items-center justify-center h-[80vh] md:h-screen"
    >
      <div
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
        className=" w-[350px] bg-white  md:w-[400px]  p-5 shadow rounded-md"
      >
        <h1 className=" text-xl flex items-center gap-2 font-semibold">
          Do you Love Me?{" "}
          <span className=" animate-bounce inline-block">
            <Heart />
          </span>
        </h1>
        <p className="  text-zinc-600 mt-2">
          If you truly love me, click the "Yes" button.You're the number one for
          me
        </p>
        <div className=" mt-3 justify-end flex items-center gap-5">
          <button
            onClick={handleCancelClick}
            ref={btn}
            className="cancel px-8 py-1 text-white rounded-md shadow-inner shadow-red-100 bg-red-500"
          >
            No
          </button>
          <button
            onClick={() => setOpen(true)}
            className="  rounded-md bg-sky-500 text-white py-1 px-8 shadow-lg "
          >
            Yes
          </button>
        </div>
      </div>
      <div className=" -translate-x-52 w-5 h-5 circle rounded-full border-green-500 border border-dashed shadow-inner shadow-green-300 left-0 top-0 fixed "></div>

      {open && <Alert setOpen={setOpen} />}
    </div>
  );
};

export default App;
