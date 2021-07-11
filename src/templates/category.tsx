import { CategoryQuery, CategoryQuery_sitePage_context } from '@src/types/graphql';
import { Link, graphql } from 'gatsby';
import React from 'react';

interface CategoryProps {
  pageContext: CategoryQuery_sitePage_context;
  data: CategoryQuery;
}

const Category = ({ pageContext, data }: CategoryProps) => {
  const { category } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${category}"`;

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
      <Link to="/categories">All Categories</Link>
    </div>
  );
};

export default Category;

export const pageQuery = graphql`
  query CategoryQuery($category: String) {
    sitePage {
      context {
        category
        slug
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
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
