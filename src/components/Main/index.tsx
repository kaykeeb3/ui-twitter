import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  BackIcon,
  BellIcon,
  BottomMenu,
  Container,
  EmailIcon,
  Header,
  HomeIcon,
  ProfileInfor,
  SearchIcon
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

          <ProfileInfor>
            <strong>Kayke Barbosa</strong>
            <span>785 Tweets</span>
          </ProfileInfor>
        
      </Header>

      <ProfilePage />

     <BottomMenu>
        <HomeIcon className='active'/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  )
}

export default Main;