import styled from "styled-components";

export const OverlayStyle = styled.div`
  position: fixed;
  inset: 0;
  right: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.6s;

  &.active {
    right: -100%;
  }

  @media screen and (min-width: 786px) {
    display: none;
  }
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: -100%;
  width: 65dvw;
  z-index: 100;
  background-color: white;
  transition: all 0.7s;
  padding-inline: 3rem;
  padding-top: 16rem;

  &.active {
    right: 0;
  }

  @media screen and (min-width: 786px) {
    display: none;
  }
`;

export const CloseBtnWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const NavListWrapperStyle = styled.div``;
