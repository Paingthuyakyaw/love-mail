import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Stagger from "./page/stagger";
import TimelineAnimation from "./page/timeline";
import FlipBox from "./page/flip";
import GsapComponent from "./page/gsap";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/stagger",
      element: <Stagger />,
    },
    {
      path: "/timeline",
      element: <TimelineAnimation />,
    },
    {
      path: "/flip",
      element: <FlipBox />,
    },
    {
      path: "/gsap",
      element: <GsapComponent />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
