import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from '@reach/router';
import { graphql, Link } from 'gatsby';
import queryString from 'query-string';

import Layout from '@src/components/layout';
import useFetch from '@src/hooks/useFetch';
import { BlogPageQuery } from '@src/types/graphql';

interface BlogPageProps {
  data: BlogPageQuery;
}

const BlogPage = ({ data }: BlogPageProps) => {
  const allMdx = data.allMdx;
  const [categoryName, setCategoryName] = useState('');
  const [page, setPage] = useState(1);
  const { loading, error, posts } = useFetch(allMdx, categoryName, page);
  const loader = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

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
              <li key={category.kind}>
                <Link
                  to={`/blog/?category=${category.kind}`}
                >{`${category.kind} (${category.totalCount})`}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section>
        <article>
          <h4>
            {data.allMdx.group.find((category) => category.kind === categoryName)?.totalCount} Posts
          </h4>
          <ul>
            {posts.map(({ node }) => (
              <li key={node.id}>
                <Link to={`${node.fields?.slug}` ?? '/404/'}>
                  <h3>{node.frontmatter?.title}</h3>
                  <h4>{node.frontmatter?.date}</h4>
                  <p>{node.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
          {loading && <p>Loading...</p>}
          {error && <p>Error!</p>}
          <div ref={loader} />
        </article>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      group(field: frontmatter___categories) {
        kind: fieldValue
        totalCount
      }
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            categories
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
