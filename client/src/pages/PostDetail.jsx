import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApi } from "../api/useApi";

const PostDetail = () => {
  const { id } = useParams();
  const { request } = useApi();
  const [post, setPost] = useState(null);

  useEffect(() => {
    request(`/posts/${id}`).then(setPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><strong>Category:</strong> {post.category?.name}</p>

      <Link to={`/edit/${post._id}`}>Edit</Link>
    </div>
  );
};

export default PostDetail;
