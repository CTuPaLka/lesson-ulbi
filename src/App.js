import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/NullStyle.css";
import "./styles/app.css";
import MyModal from "./components/UI/myModal/MyModal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "а", body: "г" },
    { id: 2, title: "б", body: "в" },
    { id: 3, title: "в", body: "б" },
    { id: 4, title: "г", body: "а" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = id => {
    setPosts(posts.filter(post => post.id !== id));
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

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про js"
      />
    </div>
  );
}

export default App;
