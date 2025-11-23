import styled from "styled-components";

export const SectionElStyle = styled.section`
  display: grid;
  gap: 3rem;

  @media screen and (min-width: 786px) {
    grid-column: 1 /4;
    grid-row: 4 / 5;

    grid-template-columns: repeat(3, 1fr);
  }
`;

export const NewsBlockStyle = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  align-items: self-start;
  gap: 2rem;
`;

export const ImageWrapper = styled.div`
  width: 90px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.8rem;

  & h3 {
    font-size: 2.8rem;
    color: var(--col-orange);
  }

  & h4 {
    color: var(--col-dark);
    font-size: 1.8rem;
  }

  p {
  }
`;
