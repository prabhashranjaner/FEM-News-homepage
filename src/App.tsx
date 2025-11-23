import styled from "styled-components";
import {
  Header,
  HeroSection,
  MobileNavigation,
  NewSection,
  NewsSection,
} from "./layouts";
import { useState } from "react";

const AppWrapperStyle = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding-block: 2rem;

  @media screen and (min-width: 786px) {
    max-width: 128rem;
  }
`;

const MainElStyle = styled.main`
  display: grid;
  gap: 3rem;

  @media screen and (min-width: 786px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    margin-top: 3rem;
  }
`;

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <AppWrapperStyle>
      <Header setIsMenuActive={setIsMenuActive} />
      <MobileNavigation
        isMenuActive={isMenuActive}
        setIsMenuActive={setIsMenuActive}
      />
      <MainElStyle>
        <HeroSection />
        <NewSection />
        <NewsSection />
      </MainElStyle>
    </AppWrapperStyle>
  );
}

export default App;
