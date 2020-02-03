import {graphql, StaticQuery} from 'gatsby';
import {arrayOf, shape, string} from 'prop-types';
import React from 'react';
import {GithubStyled, ItemStyled, LinkStyled, RepoDescriptionStyled, RepoNameStyled} from './GithubStyled';



// ########### startblock############################
// # What Can AWS Amplify do? (With Nader Dabit) - learn with Jason
//
// # can store the avator on minio or s3 storage
// type Mutation {
// 	createCharacter(input: {
// 		name: " Peter Kuria",
// 		description: "FullStack Engineer with a passion for cloud and react",
// 		avatar: "https://localminio-s3-url.com/characterdkkshl.jpeg"
// 	}) {
// 		name
// 	}
// }

// on Graphql playground
// {
// 	got {
// 		listCharacters {
// 			items {
// 				name
// 				description
// 				avatar
// 			}
// 		}
// 	}
// }


// ########## endBlock

export const getCharacter = `
  query GetCharacter($id: getCharacter(id: $id) {
    id
    name
    description
    avatar
  }

)`

export const listCharacters = `query ListCharacters(
  $filter: ModelCharacterFilterInput
)`
const query = graphql`
  query PinnedRepos {
    allPinnedRepo {
      edges {
        node {
          name
          url
          description
          updatedAt(fromNow: true)
        }
      }
    }
  }
`;

const render = ({ allPinnedRepo: { edges } }) => (
  <GithubStyled>
    {edges.map(({ node }) => {
      const { name, url, description } = node;
      return (
        <ItemStyled key={url}>
          <LinkStyled href={url} rel="noopener">
            <RepoNameStyled>{name}</RepoNameStyled>
            <RepoDescriptionStyled>{description}</RepoDescriptionStyled>
          </LinkStyled>
        </ItemStyled>
      );
    })}
  </GithubStyled>
);
render.propTypes = {
  allPinnedRepo: shape({
    edges: arrayOf({
      node: shape({
        name: string,
        url: string,
        description: string,
      }),
    }),
  }).isRequired,
};

export const Github = () => <StaticQuery query={query} render={render} />;

export default Github;
