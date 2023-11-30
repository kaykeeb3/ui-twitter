import React from "react";

import List from "../List";
import {
  Body,
  Container,
  SeacrhIcon,
  SearchInput,
  SearchWrapper
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput 
          placeholder="Buscar no Twitter"
        />
        <SeacrhIcon />
      </SearchWrapper>

      <Body>
        <List 
          title="Talvez você curta"
          elements={[
            <h1>Test</h1>,
            <h1>Test</h1>,
            <h1>Test</h1>,
          ]}
        />
      </Body>
    </Container>
  );
}

export default SideBar;