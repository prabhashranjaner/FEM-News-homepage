import styled from "styled-components";

export const SectionElStyle = styled.section`
  background-color: var(--col-dark);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 786px) {
    grid-column: 3 /4;
    grid-row: 1 / 4;
    padding: 2rem;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--col-yellow);
  }
`;

export const ContentGropStyle = styled.div`
  padding-block: 2.5rem;
  border-bottom: 1px solid var(--col-gray);

  &.last {
    border: none;
  }

  h4 {
    color: white;
    font-size: 18px;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: var(--col-yellow);
    }
  }

  p {
    color: var(--col-lightgray);
    font-weight: 500;
    line-height: 1.5;
  }
`;
