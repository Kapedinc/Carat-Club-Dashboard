import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./screens/Dashboard";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Dashboard />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
