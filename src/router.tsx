import { createBrowserRouter, Navigate } from "react-router-dom";
import Tags from "@components/Tags";
import Money from "@components/Money";
import Statistics from "@components/Statistics";

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
