import React from 'react';
import Blog from './Blog';

let BlogList = ({ blogs, initForm, removeBlog }) => (
  <ul className="blog-list">
    {blogs.map(b => (
      <Blog blog={b} removeBlog={removeBlog} initForm={initForm}/>
    ))}
  </ul>
);

export default BlogList;