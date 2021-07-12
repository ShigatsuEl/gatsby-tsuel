import { BlogPageQuery_allMdx, BlogPageQuery_allMdx_edges } from '@src/types/graphql';
import { useState, useEffect, useCallback } from 'react';

interface UseFetchArgs {
  (posts: BlogPageQuery_allMdx, query: string, page: number): {
    loading: boolean;
    error: boolean;
    posts: BlogPageQuery_allMdx_edges[];
  };
}

const useFetch: UseFetchArgs = (allMdx, query, page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<BlogPageQuery_allMdx_edges[]>([]);

  const sendQuery = useCallback(() => {
    try {
      setLoading(true);
      setError(false);
      const data = allMdx.edges
        .filter(({ node }) => node.frontmatter?.categories?.some((category) => category === query))
        .slice(0, page * 4);
      setPosts(() => [...data]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery();
  }, [query, sendQuery, page]);

  return { loading, error, posts };
};

export default useFetch;
