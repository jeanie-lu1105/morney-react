import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/tags">标签页面</Link>
            </li>
            <li>
              <Link to="/money">记账页面</Link>
            </li>
            <li>
              <Link to="/statistics">统计页面</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
