import React from 'react';

let Form = ({ tempBlog: { title, body }, updateBlogInput, submitForm }) => (
  <form className="form">
    <input type="text" onChange={(e) => updateBlogInput({ title: e.target.value })} value={title} />
    <input type="text" onChange={(e) => updateBlogInput({ body: e.target.value })} value={body} />
    <button onClick={submitForm}>Save</button>
  </form>
);

export default Form;