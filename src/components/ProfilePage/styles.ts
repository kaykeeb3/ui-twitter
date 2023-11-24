import styled, { css } from "styled-components";

import { Cake, LocationOn } from "../../styles/Icons";

export const Avatar = styled.div``;
export const Banner = styled.div``;
export const CakeIcon = styled.div``;  
export const Container = styled.div``;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;


export const Followage = styled(LocationOn)`${iconCSS}`;
export const LocationIcon = styled(Cake)`${iconCSS}`;

export const ProfileData = styled.div`

`;