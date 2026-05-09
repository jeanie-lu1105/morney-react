import { createBrowserRouter, Navigate } from "react-router-dom";
import Tags from "@/views/Tags";
import Money from "@/views/Money";
import Statistics from "@/views/Statistics";
import { Tag } from "./views/Tag";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Navigate to="/money" replace />,
  },

  {
    path: "tags",
    Component: Tags,
    children: [
      {
        path: "/tags/:id",
        Component: Tag,
      },
    ],
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
