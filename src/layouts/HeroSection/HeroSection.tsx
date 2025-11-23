import {
  ButtonStyle,
  ContentStyle,
  DetailsBlockStyle,
  ImageWrapper,
  SectionElStyle,
  TitleStyle,
} from "./HeroSection.style";

const HeroSection = () => {
  return (
    <SectionElStyle>
      <ImageWrapper>
        <picture>
          <source
            media="(min-width:786px)"
            srcSet="/public/images/image-web-3-desktop.jpg"
          ></source>
          <img alt="hero" src="/public/images/image-web-3-mobile.jpg" />
        </picture>
      </ImageWrapper>

      <TitleStyle>The Bright Future of Web 3.0?</TitleStyle>

      <DetailsBlockStyle>
        <ContentStyle>
          We dive into the next evolution of the web that claims to put the
          power of the platform back into the hands of the people. But is it
          really fulfilling uts promise?
        </ContentStyle>

        <ButtonStyle>Read More</ButtonStyle>
      </DetailsBlockStyle>
    </SectionElStyle>
  );
};

export default HeroSection;
