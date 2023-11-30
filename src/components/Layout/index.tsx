import React from "react";

import Main from "../Main";
import MenuBar from "../MenuBar";
import SideBar from "../SideBar";

import { Container, Wrapper } from "./styles";
const Layout: React.FC = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <MenuBar />

          <Main />
          <SideBar /> 
        </Wrapper>
      </Container>
    </div>
  )
}

export default Layout