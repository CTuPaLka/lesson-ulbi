import React, { useState } from "react";
import Post from "./Post";

const PostList = ({remove, posts, title})=>{

    return (

        <div>
            <h1 style={{ textAlign: "center" }}>
              {title}
            </h1>
      {posts.map((post, index) => (
        <Post remove={remove} number={index+1} post={post} key={post.id} />
      ))}
        </div>
    )
}

export default PostList;