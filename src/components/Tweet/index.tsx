import React from 'react';

import {
  Avatar,
  Body,
  CommentIcon,
  Container,
  Content,
  Description,
  Dot,
  Header,
  Icons,
  ImageContent,
  LikeIcon,
  RetweetIcon,
  Retweeted,
  RocketseatIcon,
  Status,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou 
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            
           <time>24 nov</time>
           

          </Header>
          
          <Description>Foguete não tem ré 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999  
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;