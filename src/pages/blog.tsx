import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@src/components/layout';
import { BlogAllMarkDownRemark } from '@src/types/graphql';

interface BlogPageProps {
  data: BlogAllMarkDownRemark;
}

const BlogPage = ({ data }: BlogPageProps) => {
  return (
    <Layout>
      <h1>Blog Page</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      <section>
        <article>
          <ul>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <li key={node.id}>
                <h3>{node.frontmatter?.title}</h3>
                <h4>{node.frontmatter?.date}</h4>
                <p>{node.excerpt}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogAllMarkDownRemark {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage;
