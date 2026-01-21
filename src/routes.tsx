import type { JSX } from "react";
import Home from "./pages/home";
import Create from "./pages/create";
import ArchivePage from "./pages/ArchivePage"; // import the archive page

type RouteType = {
  path: string;
  element: JSX.Element;
  index?: boolean;
};

const routes: RouteType[] = [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/archive",  
    element: <ArchivePage />,
  },
];

export default routes;
