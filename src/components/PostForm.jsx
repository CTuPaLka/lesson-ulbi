import React, { useState } from "react";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

const PostForm = (props)=>{
    const [post, setPost] = useState({
        title: "",
        body: "",
      });
      const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        props.create(newPost)
        setPost({ ...post, title: "", body: "" });
      };

    return (
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
    )
}

export default PostForm;