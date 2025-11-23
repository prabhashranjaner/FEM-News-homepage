import styled from "styled-components";

export const NavListElStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    list-style: none;
    font-weight: 500;
    font-size: 18px;
    transition: all 0.3s;
  }

  @media screen and (min-width: 786px) {
    flex-direction: row;
    gap: 2.5rem;

    li:hover {
      color: var(--col-orange);
      cursor: pointer;
    }
  }
`;
