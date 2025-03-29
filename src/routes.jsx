// import { Home, Profile, SignIn, SignUp } from "@/pages";

import Home from "./pages/home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";


export const routes = [
  {
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Product",
    path: "/product",
    element: <Product/>,
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
