import React from 'react';

import {
  Avatar,
  Container,
  FollowButton,
  Info
} from './styles';

interface Props {
  name: string;
  nickname: string; 
}

const FollowSuggestion: React.FC<Props> = ({
  name,
  nickname
}) => {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <strong>{nickname}</strong>
        </Info>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
}

export default FollowSuggestion;