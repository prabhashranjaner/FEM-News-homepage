import type { Dispatch, SetStateAction } from "react";
import NavList from "../../components/NavList/NavList";
import {
  HeaderElStyle,
  LogoWrapperStyle,
  MenuIconWrapperStyle,
  NavListWrapperStyle,
} from "./Header.style";

const Header = ({ setIsMenuActive }: PropsType) => {
  return (
    <HeaderElStyle>
      <LogoWrapperStyle>
        <img alt="logo" src="/public/images/logo.svg" />
      </LogoWrapperStyle>

      <NavListWrapperStyle>
        <NavList />
      </NavListWrapperStyle>

      <MenuIconWrapperStyle>
        <img
          alt="hamburger"
          src="/public/images/icon-menu.svg"
          onClick={() => setIsMenuActive(true)}
        />
      </MenuIconWrapperStyle>
    </HeaderElStyle>
  );
};

export default Header;

type PropsType = {
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
};
