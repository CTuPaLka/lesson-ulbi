import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostServices from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostServices.getById(params.id);
    setPost(response.data);
  });
  useEffect(() => {
    fetchPostById();
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
    </div>
  );
}

export default PostIdPage;
