let props = {
  name: 'Joshua',
  blogs: [
    {
      id: 1,
      title: 'News Item 1',
      author: 'Joshua',
      body: 'This is a short message'
    },
    {
      id: 2,
      title: 'News Item 2',
      author: 'Jonathan',
      body: 'This is a looooooooooong message looooooooooong message looooooooooong message'
    },
  ]
}

let root = document.querySelector('.react-root');
const h = React.createElement;

let Greeting = ({ name }) =>
  h('h1', null, `Hello there, ${name}!`)

let removeBlog = (blog) => {
  newBlogs = props.blogs.filter(b => b.id !== blog.id);
  newProps = {
    name: props.name,
    blogs: newBlogs
  }
  props = newProps;
  update();
};

let DeleteBlogBtn = (blog) =>
  h('button', { onClick: () => removeBlog(blog) }, `Delete ${blog.title}`);

let Blog = (blog) => {
  let { title, author, body } = blog;
  let h1 = h('h1', null, title);
  let h2 = h('h2', {className: 'author'}, author);
  let p = h('p', null, body);
  let btn = h(DeleteBlogBtn, blog);

  return h('li', {}, [h1, h2, p, btn]);
}

let BlogList = ({ blogs }) =>
  h('ul', {}, blogs.map(b => h(Blog, b, [])));

let Page = (props) => h('div', null, [
  h(Greeting, {name: props.name}, []),
  h(BlogList, {blogs: props.blogs}, [])
])

let update = () =>
  ReactDOM.render(h(Page, props), root);

update();