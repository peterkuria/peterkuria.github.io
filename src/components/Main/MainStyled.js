import styled from 'styled-components';

export const TitleStyled = styled.h1`
  margin: 16px 0 0;

  font-family: 'Fira Sans', 'Helvetica', 'Arial', sans-serif;
  font-weight: normal;
  font-size: 32px;
  text-align: center;
`;

export const SectionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  margin: 60px 0 40px;
  &:not(first) {
    margin-top: 100px;
  }

  font-family: 'Fira Sans', 'Helvetica', 'Arial', sans-serif;
  font-weight: normal;
  font-size: 24px;
`;

export const AvatarStyled = styled.img`
  margin: 40px 0 0;
  max-width: 60%;
  border-radius: 360px;
  border: 1px solid black;
`;
