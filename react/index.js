let blogs = [
  {
    title: 'News for you!',
    author: 'Joshua Martin',
    body: 'This is a short message'
  },
  {
    title: 'News item 2',
    author: 'Jonathan Martin',
    body: 'This is a looooooooooong message looooooooooong message looooooooooong message'
  },
]

let root = document.querySelector('.react-root');
const h = React.createElement;

let Blog = ({ title, author, body }) => {
  let h1 = h('h1', {}, title);
  let h2 = h('h2', {className: 'author'}, author);
  let p = h('p', {}, body);

  return h('article', {}, [h1, h2, p]);
}

let Wrapper = (props) =>
  h('section', props, blogs.map(b => h(Blog, b, [])));

ReactDOM.render(h(Wrapper), root);