import React from "react";

import FollowSuggestion from "../FollowSuggestion";
import List from "../List";
import News from "../News";

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
           <News />,
           <News />,
           <News />,
          ]}
        />

        <List 
          title="Talvez você curta"
          elements={[
           <News />,
           <News />,
           <News />,
          ]}
        />

        <List 
          title="Talvez você curta"
          elements={[
           <News />,
           <News />,
           <News />,
          ]}
        />
      </Body>
    </Container>
  );
}

export default SideBar;