import React, { useState } from "react";
import Button from "./UI/button/Button";

const Post = (props)=>{
    // const [] = useState(0)
  
    return (

        <div className="post">
        <div className="post__content">
          <strong>{props.number}- {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          {/* <button>удалить</button> */}
          <Button onClick={()=>props.remove(props.post.id)}>Удалить</Button>
          
        </div>
      </div>
    )
}

export default Post;