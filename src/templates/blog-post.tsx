import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@src/components/layout';
import { BlogPostQuery } from '@src/types/graphql';

interface BlogPostProps {
  data: BlogPostQuery;
}

const BlogPost = ({ data: { markdownRemark } }: BlogPostProps) => {
  return (
    <Layout>
      <div>Hello blog post</div>
      <section>
        <h1>{markdownRemark?.frontmatter?.title}</h1>
        <article>
          <div>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark?.html! }}></div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
