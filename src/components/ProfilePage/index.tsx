import React from 'react';
import {
  Avatar,
  Banner,
  CakeIcon,
  Container,
  EditButton,
  Followage,
  LocationIcon,
  ProfileData
} from './styles';
''

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Kayke Barbosa</h1>
        <h2>@kaykee_bl</h2>

        <p>
          Developer at <a href="https://sibi.vercel.app/">EEEP Gerardo José...</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Forquilha
            Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 25 de fevereiro de 2005 
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>678 </strong> seguindores
          </span>
        </Followage>
      </ProfileData>

      {/*<Feed />*/}
    </Container>
  );
}

export default ProfilePage;