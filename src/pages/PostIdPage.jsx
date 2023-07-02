import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostServices from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostServices.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isCommentLoading, comError] = useFetching(async () => {
    const response = await PostServices.getCommentsByPostId(params.id);
    setComments(response.data);
  });
  useEffect(() => {
    fetchPostById();
    fetchComments();
    console.log(comments);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Комментарии</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ margin: "0 0 0 3vw" }}>
          {comments.map(e => {
            return (
              <div key={e.id} style={{ marginTop: "2vh" }}>
                <h5>Name: {e.name}</h5>
                <h5>email: {e.email}</h5>
                <div>{e.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PostIdPage;
