import React, { useRef, useState } from "react";
import "./styles/NullStyle.css";
import "./styles/app.css";
import PostList from "./components/PostList";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript", body: "Description" },
    { id: 3, title: "JavaScript", body: "Description" },
    { id: 4, title: "JavaScript", body: "Description" },
  ]);
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ ...post, title: "", body: "" });
  };

  return (
    <div className="App">
      <form action="">
        {/* управляемый компонент */}
        <Input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        {/* теперь управляемый компонент.*/}
        <Input
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <Button onClick={addNewPost}>Создать пост</Button>
      </form>
      <PostList posts={posts} title="Посты про js" />
    </div>
  );
}

export default App;
