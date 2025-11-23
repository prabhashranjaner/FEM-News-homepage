import styled from "styled-components";

export const HeaderElStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapperStyle = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const MenuIconWrapperStyle = styled.div`
  @media screen and (min-width: 786px) {
    display: none;
  }
`;

export const NavListWrapperStyle = styled.div`
  display: none;

  @media screen and (min-width: 786px) {
    display: block;
  }
`;
