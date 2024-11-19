import Lottie from "react-lottie";
import heart from "../assets/heart.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Alert = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const ani = useRef(null);

  useGSAP(
    () => {
      gsap.from(".ani", {
        duration: 0.5,
        scale: 0.2,
      });
    },
    { scope: ani }
  );

  return (
    <div
      ref={ani}
      className=" flex   items-center justify-center fixed h-screen bg-black/20 w-full "
    >
      <div
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
        className=" relative ani rounded-xl bg-white"
      >
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: heart,
          }}
          width={350}
          height={200}
        />
        <button
          onClick={() => setOpen(false)}
          className=" absolute top-2 border rounded-full w-5 h-5 flex items-center  pb-1 justify-center border-black right-4"
        >
          x
        </button>
        <p className=" font-bold text-xl  text-center mb-5">Surprise!</p>
      </div>
    </div>
  );
};

export default Alert;
