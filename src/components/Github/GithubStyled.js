import styled from 'styled-components';

export const GithubStyled = styled.ul`
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
  margin-bottom: 16px;
  flex-basis: calc(50% - 8px);
  padding: 16px;
  border: 1px solid rgb(209, 213, 218);
  border-radius: 3px;
`;

export const LinkStyled = styled.a`
  text-decoration: none;
  color: black;
`;

export const RepoNameStyled = styled.h3`
  font-weight: bold;
  color: #0366d6;
`;

export const RepoDescriptionStyled = styled.p`
  font-size: 14px;
  color: #586069;
  margin: 8px 0 16px;
`;
