import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import "/style.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "/index.css";
// import About from "./Components/About";
// import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import ResMenu from "./Components/ResMenu";
import Shimmer from "./Components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const About = lazy(() => import("./Components/About"));
const ContactUs = lazy(() => import("./Components/ContactUs"));

const Applayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app-container">
        <Header />
        {/* <Body /> */}
        <Outlet />
      </div>
    </Provider>
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
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
