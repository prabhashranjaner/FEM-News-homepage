import styled from "styled-components";

export const SectionElStyle = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-block: 1.5rem;

  @media screen and (min-width: 786px) {
    grid-column: 1 /3;
    grid-row: 1 / 4;
    margin-top: 0;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
  }
`;

export const ImageWrapper = styled.div`
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 786px) {
    grid-column: 1 /3;
    grid-row: 1 / 2;
  }
`;

export const TitleStyle = styled.h1`
  color: var(--col-dark);
  font-size: 34px;
  width: 80%;
  font-weight: 800;
  line-height: 1;

  @media screen and (min-width: 786px) {
    font-size: 4rem;
    width: 70%;
    line-height: 1.2;
  }
`;

export const DetailsBlockStyle = styled.div``;

export const ContentStyle = styled.p`
  line-height: 1.5;
  margin-bottom: 2rem;

  @media screen and (min-width: 786px) {
    margin-bottom: 3rem;
    line-height: 2;
  }
`;

export const ButtonStyle = styled.button`
  outline-color: transparent;
  border: none;
  padding: 1.5rem 2.5rem;
  background-color: var(--col-orange);
  color: var(--col-dark);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--col-dark);
    color: white;
  }
`;
