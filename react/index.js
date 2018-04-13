// Initial definitions

const root = document.querySelector('.react-root');
const h = React.createElement;
const initBlogs = [
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
];

// Components
let Blog = ({ blog, removeBlog, initForm }) => {
  let { title, body } = blog;

  return h('li', { className: 'blog' }, [
    h('h1', { key: 'title' }, title),
    h('p', { key: 'body' }, body),
    h('button', { key: 'delete', onClick: () => removeBlog(blog) }, 'Delete'),
    h('button', { key: 'edit', onClick: () => initForm(blog) }, 'Edit')
  ]);
}

let BlogList = ({ blogs, initForm, removeBlog }) =>
  h('ul', { className: 'blog-list' }, [
    blogs.map(b => h(Blog, { blog: b, removeBlog, initForm }))
  ]);

let Form = ({ tempBlog, updateBlogInput, submitForm }) => {
  let { title, body } = tempBlog;

  return h('form', { className: 'form' }, [
    h('input', { type: 'text', onChange: (e) => updateBlogInput({ title: e.target.value }), value: title }),
    h('input', { type: 'text', onChange: (e) => updateBlogInput({ body: e.target.value }), value: body }),
    h('button', { onClick: () => submitForm(tempBlog) }, 'Save')
  ]);
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: initBlogs,
      tempBlog: null,
      editMode: false
    }
  }

  render() {
    let { blogs, tempBlog, editMode } = this.state;

    let updateBlogs = (blog) => {
      let newBlogs = blogs.map(b =>
        b.id === blog.id ? blog : b
      );

      this.setState({
        blogs: newBlogs
      });
    }

    let removeBlog = (blog) => {
      let newBlogs = blogs.filter(b => b.id !== blog.id);
      this.setState({
        blogs: newBlogs
      });
    }

    let updateBlogInput = (keyValObj) => {
      let newTempBlog = Object.assign({}, tempBlog, keyValObj);
      this.setState({
        tempBlog: newTempBlog
      });
    }

    let closeForm = () => {
      this.setState({
        tempBlog: null,
        editMode: false
      });
    }

    let submitForm = (blog) => {
      updateBlogs(blog);
      closeForm();
    }

    let initForm = (blog) => {
      this.setState({
        tempBlog: blog,
        editMode: true
      });
    }

    return h('section', { className: 'page' },
      (editMode ?
        h(Form, { key: 'form', tempBlog, updateBlogInput, submitForm }) :
        h(BlogList, { key: 'blog-list', blogs, removeBlog, initForm })
      )
    );
  }
}

ReactDOM.render(h(Page), root);