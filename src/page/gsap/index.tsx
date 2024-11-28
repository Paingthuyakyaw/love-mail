import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
const GsapComponent = () => {
  const ref = useRef<any>(null);

  // let currentValue = 0;
  // function startLoader() {
  //   if (currentValue === 100) {
  //     return;
  //   }

  //   currentValue += Math.floor(Math.random() * 10) + 1;

  //   if (currentValue > 100) {
  //     currentValue = 100;
  //   }

  //   ref.current && (ref.current.textContent = currentValue.toString());

  //   let delay = Math.floor(Math.random() * 200) + 50;

  //   setTimeout(startLoader, delay);

  //   console.log(currentValue);
  // }

  // startLoader();

  // useGSAP(() =>
  //   gsap.to(ref.current, {
  //     delay: 3,
  //     opacity: 0,
  //     duration: 0.5,
  //   })
  // );

  const { contextSafe } = useGSAP(() => {
    gsap.set(".lorem", {
      backgroundColor: "yellow",
      margin: 10,
    });
  });

  const handleClick = contextSafe(() => {
    gsap.to(".lorem", {
      width: "100%",
      margin: 0,
    });
  });

  return (
    // <div className=" bg-black h-screen flex items-center justify-center">
    //   <div ref={ref} className=" text-white font-bold text-4xl ">
    //     0
    //   </div>

    //   <button onClick={startLoader}>click</button>
    // </div>
    <div className=" ">
      <div className=" lorem  rounded-md shadow-md w-[500px] p-3 border ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero
        placeat et illo, sunt alias quaerat omnis, nihil ea quas minima itaque
        quia dolorem nesciunt laboriosam odit suscipit repudiandae explicabo?
      </div>

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default GsapComponent;
