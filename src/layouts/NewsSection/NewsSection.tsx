import {
  ContentBlockStyle,
  ImageWrapper,
  NewsBlockStyle,
  SectionElStyle,
} from "./NewsSection.style";

const NewsSection = () => {
  return (
    <SectionElStyle>
      <NewsBlockStyle>
        <ImageWrapper>
          <img src="/images/image-retro-pcs.jpg" alt="retro" />
        </ImageWrapper>
        <ContentBlockStyle>
          <h3>01</h3>
          <h4>Reviving Retro PCs</h4>
          <p>What happenes when old PCs are given modren upgrades?</p>
        </ContentBlockStyle>
      </NewsBlockStyle>

      <NewsBlockStyle>
        <ImageWrapper>
          <img src="/images/image-top-laptops.jpg" alt="laptop" />
        </ImageWrapper>
        <ContentBlockStyle>
          <h3>02</h3>
          <h4>Top 10 Laptops of 2025</h4>
          <p>Our best picks for various need and budgets</p>
        </ContentBlockStyle>
      </NewsBlockStyle>

      <NewsBlockStyle>
        <ImageWrapper>
          <img src="/public/images/image-gaming-growth.jpg" alt="growth" />
        </ImageWrapper>
        <ContentBlockStyle>
          <h3>03</h3>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </ContentBlockStyle>
      </NewsBlockStyle>
    </SectionElStyle>
  );
};

export default NewsSection;
