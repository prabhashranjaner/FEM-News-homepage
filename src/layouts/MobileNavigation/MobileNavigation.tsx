import type { Dispatch, SetStateAction } from "react";
import {
  CloseBtnWrapper,
  ModalStyle,
  NavListWrapperStyle,
  OverlayStyle,
} from "./MobileNavigation.style";
import NavList from "../../components/NavList/NavList";

const MobileNavigation = ({ isMenuActive, setIsMenuActive }: PropsType) => {
  return (
    <>
      <OverlayStyle className={`${isMenuActive ? "active" : ""}`} />
      <ModalStyle className={`${isMenuActive ? "active" : ""}`}>
        <CloseBtnWrapper>
          <img
            alt="close"
            src="/public/images/icon-menu-close.svg"
            onClick={() => setIsMenuActive(false)}
          />
        </CloseBtnWrapper>

        <NavListWrapperStyle>
          <NavList />
        </NavListWrapperStyle>
      </ModalStyle>
    </>
  );
};

export default MobileNavigation;

type PropsType = {
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
  isMenuActive: boolean;
};
