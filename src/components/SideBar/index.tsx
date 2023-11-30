import React from "react";

import FollowSuggestion from "../FollowSuggestion";
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
            <FollowSuggestion 
              name="Rafa Fernandes"
              nickname="@rafernandes"
            />,
            <FollowSuggestion 
              name="Luiz Batanero"
              nickname="@luizbatanero"
            />,
            <FollowSuggestion 
              name="Luke Morales"
              nickname="@lukemorales"
            />,
          ]}
        />

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