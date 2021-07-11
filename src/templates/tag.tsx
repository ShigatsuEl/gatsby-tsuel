import { TagQuery } from '@src/types/graphql';
import { Link, graphql } from 'gatsby';
import React from 'react';

interface TagProps {
  pageContext: any;
  data: TagQuery;
}

const Tag = ({ pageContext, data }: TagProps) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          return (
            <li key={node.fields?.slug}>
              <Link to={node.fields?.slug ?? ''}>{node.frontmatter?.title}</Link>
            </li>
          );
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </div>
  );
};

export default Tag;

export const pageQuery = graphql`
  query TagQuery($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
