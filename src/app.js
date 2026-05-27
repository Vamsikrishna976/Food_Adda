import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import "./style.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import ResMenu from "./Components/ResMenu";

const Applayout = () => {
  return (
    <div className="app-container">
      <Header />
      {/* <Body /> */}
      <Outlet />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
       {
    path: "/About",
    element: <About />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      }],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
