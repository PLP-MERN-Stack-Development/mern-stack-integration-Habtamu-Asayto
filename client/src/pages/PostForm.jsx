import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../api/useApi";

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { request } = useApi();

  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    request("/categories").then(setCategories);

    if (id) {
      request(`/posts/${id}`).then((data) =>
        setForm({
          title: data.title,
          content: data.content,
          category: data.category._id,
        })
      );
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await request(`/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify(form),
      });
    } else {
      await request("/posts", {
        method: "POST",
        body: JSON.stringify(form),
      });
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Post" : "Create Post"}</h2>

      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="content"
        placeholder="Content"
        value={form.content}
        onChange={handleChange}
        required
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>

      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;
