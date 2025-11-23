import { ContentGropStyle, SectionElStyle } from "./NewSection.style";

const NewSection = () => {
  return (
    <SectionElStyle>
      <h2>New</h2>

      <ContentGropStyle>
        <h4>Hydrogen Vs Electric Cars</h4>
        <p>Will hydrogen fueled cars ever catch up to EVs?</p>
      </ContentGropStyle>

      <ContentGropStyle>
        <h4>The Downsides of AI Artistry</h4>
        <p>
          What are the possible adverse effects of on-demand AI image generation
        </p>
      </ContentGropStyle>

      <ContentGropStyle className="last">
        <h4>Is VC Funcding Drying Up?</h4>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          thats means.
        </p>
      </ContentGropStyle>
    </SectionElStyle>
  );
};

export default NewSection;
