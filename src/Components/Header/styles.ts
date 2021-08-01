import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 5rem;
  width: 100vw;
  border-bottom: 1px solid #ddd;
`;

export const HeaderContent = styled.nav`
  height: 5rem;
  width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  strong {
    font-size: 1.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-size: 1.2rem;
    margin-left: auto;
  }
`;
