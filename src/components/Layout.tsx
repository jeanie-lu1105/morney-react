/* eslint-disable @typescript-eslint/no-explicit-any */

import styled from "styled-components";
import Nav from "./Nav";
import type React from "react";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: number;
`;

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

type Props = {
  className?: string;
  children: React.ReactNode;
  scrollTop?: number;
};
const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollTop = props.scrollTop! || 0;
      }
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className} data-x={"test-111"}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  );
};

export default Layout;
