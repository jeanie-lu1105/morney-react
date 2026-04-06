import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICONS } from "@/constants/icon.const";
const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      padding: 4px 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2px 0;

      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        {ICONS.map((item, index) => (
          <li key={index}>
            <item.icon fill="grey" className="icon" />
            <Link to={item.to}>{item.displayName}</Link>
          </li>
        ))}
      </ul>
    </NavWrapper>
  );
};

export default Nav;
