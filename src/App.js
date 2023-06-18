import React, { useMemo, useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/NullStyle.css";
import "./styles/app.css";
import Select from "./components/UI/select/Select";
import Input from "./components/UI/input/Input";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "а", body: "г" },
    { id: 2, title: "б", body: "в" },
    { id: 3, title: "в", body: "б" },
    { id: 4, title: "г", body: "а" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // const getSortedPost = () => {};

  const sortedPost = useMemo(() => {
    console.log("функция отработала сортировку");
    return selectedSort
      ? [...posts].sort((a, b) =>
          a[selectedSort].localeCompare(b[selectedSort])
        )
      : posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(post =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPost]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };
  const removePost = id => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const sortPosts = sort => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <Input
          placeholder="Поиск..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <Select
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={"Сортировка по"}
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Посты про js"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
