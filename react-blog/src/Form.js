import React from 'react';

let Form = ({ tempBlog, updateBlogInput, submitForm }) => {
  let { title, body } = tempBlog;

  return (
    <form className="form">
      <input type="text" onChange={(e) => updateBlogInput({ title: e.target.value })} value={title} />
      <input type="text" onChange={(e) => updateBlogInput({ body: e.target.value })} value={body} />
      <button onClick={() => submitForm(tempBlog)}>Save</button>
    </form>
  );
}

export default Form;