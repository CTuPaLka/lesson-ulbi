import React, { useEffect, useRef, useState } from "react";
import PostServices from "../API/PostService";
import Button from "../components/UI/button/Button";
import MyModal from "../components/UI/myModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import Loader from "../components/UI/loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../components/utils/pages";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const lastElement = useRef();
  const observer = useRef();

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostServices.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    // debugger;
    if (isPostLoading) return;
    if (observer.current) observer.current.disconnect();
    const callback = function (entries, observer) {
      if (entries[0].isIntersecting && page < totalPages) {
        setPage(page + 1);
      }
    };
    console.log(observer.current);
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isPostLoading]);
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = id => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const changePage = page => {
    setPage(page);
  };

  return (
    <div className="App">
      <Button style={{ marginTop: "2vh" }} onClick={() => setModal(true)}>
        Создать пост
      </Button>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && (
        <h1 style={{ textAlign: "center" }}>Произошла ошибка ${postError}</h1>
      )}
      {isPostLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5vw",
          }}
        >
          <Loader />
        </div>
      )}

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про js"
      />
      <div ref={lastElement} style={{ height: "20px", background: "red" }} on />
      <Pagination
        totalPages={totalPages}
        pagesNumber={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
