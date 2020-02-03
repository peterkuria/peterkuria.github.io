import styled from 'styled-components';

export const InstagramStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: 0;
  padding: 0;
  max-width: 90%;
  width: 800px;

  list-style: none;
`;

export const ItemStyled = styled.li`
  flex-basis: calc(33.33%);

  margin: 0;
  padding: 0;

  border: 1.33px solid white;
`;

export const ThumbnailStyled = styled.img`
  width: 100%;
`;
