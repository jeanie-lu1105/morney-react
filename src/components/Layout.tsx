import type { PropsWithChildren } from "react";
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
`;

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <Nav />
    </Wrapper>
  );
};

export default Layout;
