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
  const [title, setTitle] = useState("");
  // const [title2, setTitle2] = useState("");

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <form action="">
        {/* управляемый компонент */}
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        {/* неуправляемый компонент. если передавать просто ref вместо innerRef, то выбивает ошибку */}
        <Input
          innerRef={bodyInputRef}
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
