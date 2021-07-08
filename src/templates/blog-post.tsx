import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@src/components/layout';
import { BlogPostQuery } from '@src/types/graphql';

interface BlogPostProps {
  data: BlogPostQuery;
}

const BlogPost = ({ data: { mdx } }: BlogPostProps) => {
  return (
    <Layout>
      <header>
        <h1>{mdx?.frontmatter?.title}</h1>
      </header>
      <section>
        <article>
          <div>
            <MDXRenderer>{mdx?.body ?? ''}</MDXRenderer>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;

export default BlogPost;
