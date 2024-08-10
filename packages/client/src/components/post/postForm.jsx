import React, { useEffect, useState } from "react";

const PostForm = ({
  pageTitle,
  onSubmit,
  postData = { title: "", content: "" },
}) => {
  const [title, setTitle] = useState(postData.title);
  const [content, setContent] = useState(postData.content);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!title) errors.title = "Title is required";
    if (!content) errors.content = "content is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit({ title, content });
    }
  };

  useEffect(() => {
    setTitle(postData.title);
    setContent(postData.content);
  }, [postData.title, postData.content]);

  return (
    <div>
      <h1>{pageTitle}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
        </div>
        <div>
          <label>content:</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {errors.content && <p style={{ color: "red" }}>{errors.content}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
