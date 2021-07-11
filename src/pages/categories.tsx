import { CategoriesPageQuery } from '@src/types/graphql';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import React from 'react';
import { Helmet } from 'react-helmet';

interface CategoriesPageProps {
  data: CategoriesPageQuery;
}

const CategoriesPage = ({
  data: {
    allMdx: { group },
    site,
  },
}: CategoriesPageProps) => (
  <div>
    <Helmet title={site?.siteMetadata?.title ?? 'Tags'} />
    <div>
      <h1>Categories</h1>
      <ul>
        {group.map((category) => (
          <li key={category.kind}>
            <Link to={`/categories/${kebabCase(category.kind!)}`}>
              {category.kind} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CategoriesPage;

export const pageQuery = graphql`
  query CategoriesPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___categories) {
        kind: fieldValue
        totalCount
      }
    }
  }
`;
