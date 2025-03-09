import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import React, { Suspense } from "react";

// Lazy load các page
const Home = React.lazy(() => import("../pages/home/Home"));
const HotelDetail = React.lazy(() => import("../pages/hoteldetail/HotelDetail"));
const Hotels = React.lazy(() => import("../pages/hotels/Hotels"));
const NotFound = React.lazy(() => import("../pages/notfound/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Dùng Layout làm wrapper
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "hotels",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Hotels />
          </Suspense>
        ),
      },
      {
        path: "hotels/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HotelDetail />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
