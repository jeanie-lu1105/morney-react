/* eslint-disable @typescript-eslint/no-explicit-any */

import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main className={props.className}>{props.children}</Main>
      <Nav />
    </Wrapper>
  );
};

export default Layout;
