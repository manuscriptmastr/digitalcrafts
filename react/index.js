// Initial definitions

let root = document.querySelector('.react-root');
const h = React.createElement;

// Data and state

let props = {
  tempBlog: null,
  blogs: [
    {
      id: 1,
      title: 'News Item 1',
      body: 'This is a short message'
    },
    {
      id: 2,
      title: 'News Item 2',
      body: 'This is a looooooooooong message looooooooooong message looooooooooong message'
    },
    {
      id: 3,
      title: 'News Item 3',
      body: 'I love ice cream lorem ipsum mupsi merol'
    }
  ]
}

// Actions

let updateTempBlog = (obj) => {
  props.tempBlog = Object.assign({}, props.tempBlog, obj);
  update();
}

// Triggered by delete button
let removeBlog = (blog) => {
  let { blogs } = props;
  let newBlogs = blogs.filter(b => b.id !== blog.id);
  props.blogs = newBlogs;
  update();
}

// Triggered by the save button
let saveBlog = (blog) => {
  let oldBlog = props.blogs.find(b => b.id === blog.id);
  Object.assign(oldBlog, blog);
  closeForm();
  update();
}

// Triggered by edit button
let openForm = (blog) => {
  props.tempBlog = blog;
  update();
}

// Triggered by saving a blog
let closeForm = () => {
  props.tempBlog = null;
  update();
}

// Components
let Blog = (blog) => {
  let { title, body } = blog;

  return h('li', { className: 'blog' }, [
    h('h1', { key: 'title' }, title),
    h('p', { key: 'body' }, body),
    h('button', { key: 'delete', onClick: () => removeBlog(blog) }, 'Delete'),
    h('button', { key: 'edit', onClick: () => openForm(blog) }, 'Edit')
  ]);
}

let BlogList = ({ blogs }) =>
  h('ul', { className: 'blog-list' }, [
    blogs.map(b => h(Blog, b))
  ]);

let Form = ({ tempBlog }) => {
  let { title, body } = tempBlog;

  return h('form', { className: 'form' }, [
    h('input', { key: 'title', type: 'text', onChange: (e) => updateTempBlog({ title: e.target.value }), value: title }),
    h('input', { key: 'body', type: 'text', onChange: (e) => updateTempBlog({ body: e.target.value }), value: body }),
    h('button', { key: 'save', onClick: () => saveBlog(tempBlog)}, 'Save')
  ]);
}

let Page = ({ blogs, tempBlog }) =>
  h('section', { className: 'page' },
    (tempBlog ? h(Form, { key: 'form', tempBlog }) : h(BlogList, { key: 'blog-list', blogs }))
  );

let update = () =>
  ReactDOM.render(h(Page, props), root);

update();