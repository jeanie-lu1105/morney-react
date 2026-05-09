import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ICONS } from "@/constants/icon.const";

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background: white;

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;

      > a {
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        align-items: center;
        margin: 2px 0;

        .icon {
          width: 24px;
          height: 24px;
          fill: grey;
        }

        &.active-class {
          color: #007bff;

          .icon {
            fill: #007bff;
          }
        }
      }
    }
  }
`;

const generateClassName = (isActive: boolean) => {
  return isActive ? "active-class" : "inactive-class";
};

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        {ICONS.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={({ isActive }) => generateClassName(isActive)}
            >
              <item.icon className="icon" />
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavWrapper>
  );
};

export default Nav;
