import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import Tags from "./components/Tags";
import Money from "./components/Money";
import Statictics from "./components/Statistics";

const RootLayout = () => (
  <>
    <div>
      <h1>App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/tags">About</Link>
          </li>
          <li>
            <Link to="/money">Money</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Outlet /> {/* Renders matched child route */}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
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
        Component: Statictics,
      },
    ],
  },
]);

export default router;
