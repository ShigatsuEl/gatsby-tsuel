import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '@src/components/layout';
import { BlogAllMarkDownRemark } from '@src/types/graphql';

interface BlogPageProps {
  data: BlogAllMarkDownRemark;
}

const BlogPage = ({ data }: BlogPageProps) => {
  return (
    <Layout>
      <h1>Blog Page</h1>
      <h4>{data.allMdx.totalCount} Posts</h4>
      <section>
        <article>
          <ul>
            {data.allMdx.edges.map(({ node }) => (
              <li key={node.id}>
                <Link to={`${node.fields?.slug}` ?? '/404/'}>
                  <h3>{node.frontmatter?.title}</h3>
                  <h4>{node.frontmatter?.date}</h4>
                  <p>{node.excerpt}</p>
                </Link>
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
    allMdx {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage;
