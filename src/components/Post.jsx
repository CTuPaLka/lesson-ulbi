import React from "react";
import Button from "./UI/button/Button";

const Post = props => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}- {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        {/* <button>удалить</button> */}
        <Button onClick={() => props.remove(props.post.id)}>Удалить</Button>
      </div>
    </div>
  );
};

export default Post;
