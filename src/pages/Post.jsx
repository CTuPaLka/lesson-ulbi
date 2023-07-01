import React from "react";
import Button from "../components/UI/button/Button";
import { NavLink, useNavigate } from "react-router-dom";

const Post = props => {
  const navigate = useNavigate();
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
        <Button>
          <NavLink to={"/posts/" + props.post.id}>Открыть</NavLink>
        </Button>
        <Button onClick={() => props.remove(props.post.id)}>Удалить</Button>
      </div>
    </div>
  );
};

export default Post;
