import styled, { css } from "styled-components";

import {
  Email,
  FavoriteBorder,
  Home,
  Notifications,
  Person
} from "../../styles/Icons";
 
export const Container = styled.div``;


export const Topside = styled.div``;
export const Logo = styled.div``;
export const MenuButton = styled.div``;

const iconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`${iconCSS}`;
export const BellIcon = styled(Notifications)`${iconCSS}`;
export const EmailIcon = styled(Email)`${iconCSS}`;
export const FavoriteIcon = styled(FavoriteBorder)`${iconCSS}`;
export const ProfileIcon = styled(Person)`${iconCSS}`;