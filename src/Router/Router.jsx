import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
// import Home from "../Components/Home/Home";
import Booking from "../Components/MyBooking/Booking";
import Blogs from "../Components/Blogs/Blogs";
import Contact from "../Components/ContactUs/Contact";
import DoctorDetails from "../Components/DoctorsDetails/DoctorDetails";
import Error from "./Error/Error";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Root></Root>
      </Suspense>
    ),
    loader: () => fetch("/doctors.json").then((res) => res.json()),
    errorElement: <Error></Error>,

    children: [
      {
        index: true,
        Component: Home,
        path: "/",
        loader: () => fetch("/doctors.json").then((res) => res.json()),
      },
      {
        path: "booking",
        element: (
          <Suspense
            fallback={<span className="loading loading-bars loading-xl"></span>}
          >
            <Booking></Booking>
          </Suspense>

        ),
      },
      {
        path: "blogs",
        loader: () => fetch("/blogs.json").then((res) => res.json()),
        element: (
          <Suspense
            fallback={<span className="loading loading-bars loading-xl"></span>}
          >
            <Blogs></Blogs>
          </Suspense>
        ),
      },
      {
        path: "contact",
        Component: Contact,
      },

      {
        path: "/DoctorsDetails/:id",
        Component: DoctorDetails,
        loader: () => fetch("/doctors.json").then((res) => res.json()),
      },
    ],
  },
]);
