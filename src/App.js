import React, { useEffect, useState } from "react";
import PostServices from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Button from "./components/UI/button/Button";
import MyModal from "./components/UI/myModal/MyModal";
import { usePosts } from "./hooks/usePosts";
import "./styles/NullStyle.css";
import "./styles/app.css";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount } from "./components/utils/pages";
import { usePagesArray } from "./hooks/usePagesArray";
import Pagination from "./components/UI/pagination/Pagination";

function App() {
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

export default App;
