import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '@src/components/layout';
import { BlogPostQuery, BlogPostQuery_sitePage_context } from '@src/types/graphql';

interface BlogPostProps {
  data: BlogPostQuery;
  pageContext: BlogPostQuery_sitePage_context;
}

const BlogPost = ({ data: { mdx }, pageContext }: BlogPostProps) => {
  const { next, previous } = pageContext;

  const nextPost = next && (
    <li>
      <Link to={next.fields?.slug ?? '/'}>
        <strong>Next Post</strong> <br />
        {next.frontmatter?.title}
      </Link>
    </li>
  );

  const prevPost = previous && (
    <li>
      <Link to={previous.fields?.slug ?? '/'}>
        <strong>Previous Post</strong> <br />
        {previous.frontmatter?.title}
      </Link>
    </li>
  );

  return (
    <Layout>
      <header>
        <h1>{mdx?.frontmatter?.title}</h1>
      </header>
      <main>
        <section>
          <article>
            <div>
              <MDXRenderer>{mdx?.body ?? ''}</MDXRenderer>
            </div>
          </article>
          <nav>
            <ul style={{ display: 'flex', justifyContent: 'space-between', padding: 0 }}>
              <>
                {prevPost}
                {nextPost}
              </>
            </ul>
          </nav>
        </section>
      </main>
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
    sitePage {
      context {
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
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

export default BlogPost;
