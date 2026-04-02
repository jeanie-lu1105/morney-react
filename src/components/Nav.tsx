import { Link } from "react-router-dom";
import styled from "styled-components";
import BookmarkIcon from "@icons/bookmark.svg?react";
import ChartIcon from "@icons/chart.svg?react";
import MoneyIcon from "@icons/money.svg?react";
const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      margin: 8px 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <BookmarkIcon width="24" height="24" />
          <Link to="/tags">标签页面</Link>
        </li>
        <li>
          <MoneyIcon width="24" height="24" />
          <Link to="/money">记账页面</Link>
        </li>
        <li>
          <ChartIcon width="24" height="24" />
          <Link to="/statistics">统计页面</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
