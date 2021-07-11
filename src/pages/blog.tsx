import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';
import { graphql, Link } from 'gatsby';
import queryString from 'query-string';

import Layout from '@src/components/layout';
import { BlogAllMarkDownRemark } from '@src/types/graphql';
import { useState } from 'react';

interface BlogPageProps {
  data: BlogAllMarkDownRemark;
  pageContext: any;
}

const BlogPage = ({ data }: BlogPageProps) => {
  const [categoryName, setCategoryName] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.search === '') {
      setCategoryName('all');
    } else {
      setCategoryName(queryString.parse(location.search).category as string);
    }
  }, [location]);

  return (
    <Layout>
      <header>
        <h1>Blog Page</h1>
        <nav>
          <ul>
            {data.allMdx.group.map((category) => (
              <li key={category.tag}>
                <Link
                  to={`/blog/?category=${category.tag}`}
                >{`${category.tag} (${category.totalCount})`}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section>
        <article>
          <h4>{data.allMdx.totalCount} Posts</h4>
          <ul>
            {data.allMdx.edges
              .filter(({ node }) => node.frontmatter?.tags?.some((tag) => tag === categoryName))
              .map(({ node }) => (
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
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
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
