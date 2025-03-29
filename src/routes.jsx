// import { Home, Profile, SignIn, SignUp } from "@/pages";

import Home from "./pages/home";
import Contact from "./pages/Contact";
import About from "./pages/About";


export const routes = [
  {
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About Us",
    path: "/product",
    element: <About/>,
  },
  {
    name: "Our Services",
    path: "/product",
    element: <About/>,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact/>,
  },
  // {
  //   name: "Contact Us",
  //   path: "/contact-us",
  //   element: <Microsoldering />,
  // },
  // {
  //   name: "Order",
  //   path: "/order",
  //   element: <Printing />,
  // }
];

export default routes;
