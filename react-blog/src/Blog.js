import React from 'react';

let Blog = ({ blog, removeBlog, initForm }) => {
  let { title, body } = blog;

  return (
    <li className="blog">
      <h1 key="title">{title}</h1>
      <p key="body">{body}</p>
      <button key="delete" onClick={() => removeBlog(blog)}>Delete</button>
      <button key="edit" onClick={() => initForm(blog)}>Edit</button>
    </li>
  );
}

export default Blog;