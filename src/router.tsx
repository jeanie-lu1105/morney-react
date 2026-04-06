import { createBrowserRouter, Navigate } from "react-router-dom";
import Tags from "@/views/Tags";
import Money from "@/views/Money";
import Statistics from "@/views/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Navigate to="/money" replace />,
  },

  {
    path: "tags",
    Component: Tags,
  },
  {
    path: "money",
    Component: Money,
  },
  {
    path: "statistics",
    Component: Statistics,
  },
]);

export default router;
