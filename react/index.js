let blogs = [
  {
    title: 'News Item 1',
    author: 'Joshua',
    body: 'This is a short message'
  },
  {
    title: 'News Item 2',
    author: 'Jonathan',
    body: 'This is a looooooooooong message looooooooooong message looooooooooong message'
  },
]

let root = document.querySelector('.react-root');
const h = React.createElement;

let Blog = ({ title, author, body }) => {
  let h1 = h('h1', null, title);
  let h2 = h('h2', {className: 'author'}, author);
  let p = h('p', null, body);

  return h('li', {}, [h1, h2, p]);
}

let BlogList = ({ blogs }) =>
  h('ul', {}, blogs.map(b => h(Blog, b, [])));

let Page = () =>
  h(BlogList, {blogs: blogs}, []);

ReactDOM.render(h(Page), root);