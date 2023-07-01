import React, { useEffect, useState } from "react";
import PostServices from "../../API/PostService";
import Button from "../UI/button/Button";
import MyModal from "../UI/myModal/MyModal";
import PostFilter from "../PostFilter";
import PostForm from "../PostForm";
import Loader from "../UI/loader/Loader";
import PostList from "../PostList";
import Pagination from "../UI/pagination/Pagination";
import { usePosts } from "../../hooks/usePosts";
import { useFetching } from "../../hooks/useFetching";
import { getPageCount } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostServices.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

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
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5vw",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Посты про js"
        />
      )}
      <Pagination
        totalPages={totalPages}
        pagesNumber={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
