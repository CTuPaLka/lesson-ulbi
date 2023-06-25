import { useMemo } from "react";

export const useSortedPost = (posts, sort) => {
  const sortedPost = useMemo(() => {
    console.log("функция отработала сортировку");
    return sort
      ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
      : posts;
  }, [sort, posts]);
  return sortedPost;
};

export const usePosts = (posts, sort, query) => {
  const sortedPost = useSortedPost(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(query));
  }, [query, sortedPost]);
  return sortedAndSearchedPosts;
};
