import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { shape, arrayOf, string, number } from 'prop-types';
import {
  InstagramStyled,
  ThumbnailStyled,
  ItemStyled,
} from './InstagramStyled';

const query = graphql`
  query {
    allInstaNode(sort: { fields: [timestamp], order: DESC }) {
      edges {
        node {
          id
          caption
          thumbnails {
            src
            config_width
            config_height
          }
        }
      }
    }
  }
`;

const render = ({ allInstaNode: { edges } }) => (
  <InstagramStyled>
    {edges.map(({ node: { thumbnails, id, caption } }) => {
      const { src } = thumbnails.find(el => el.config_width === 320);
      return (
        <ItemStyled key={src}>
          <a href={`https://www.instagram.com/p/${id}/`} rel="noopener">
            <ThumbnailStyled
              src={src}
              alt={`Instagram image: ${caption} | @nihilismislove | Peter Kuria`}
            />
          </a>
        </ItemStyled>
      );
    })}
  </InstagramStyled>
);
render.propTypes = {
  allInstaNode: shape({
    edges: arrayOf({
      node: shape({
        thumbnails: arrayOf(
          shape({
            src: string,
            config_width: number,
          })
        ),
        id: string,
        caption: string,
      }),
    }),
  }).isRequired,
};

export const Instagram = () => <StaticQuery query={query} render={render} />;

export default Instagram;
