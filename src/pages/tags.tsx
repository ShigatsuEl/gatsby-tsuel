import { TagsPageQuery } from '@src/types/graphql';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import React from 'react';
import { Helmet } from 'react-helmet';

interface TagsPageProps {
  data: TagsPageQuery;
}

const TagsPage = ({
  data: {
    allMdx: { group },
    site,
  },
}: TagsPageProps) => (
  <div>
    <Helmet title={site?.siteMetadata?.title ?? 'Tags'} />
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue!)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TagsPage;

export const pageQuery = graphql`
  query TagsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
