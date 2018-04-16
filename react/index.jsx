// Initial definitions

const root = document.querySelector('.react-root');
// const initBlogs = [
//   {
//     id: 1,
//     title: 'News Item 1',
//     body: 'This is a short message'
//   },
//   {
//     id: 2,
//     title: 'News Item 2',
//     body: 'This is a looooooooooong message looooooooooong message looooooooooong message'
//   },
//   {
//     id: 3,
//     title: 'News Item 3',
//     body: 'I love ice cream lorem ipsum mupsi merol'
//   }
// ];

// Components
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

let BlogList = ({ blogs, initForm, removeBlog }) => (
  <ul className="blog-list">
    {blogs.map(b => (
      <Blog blog={b} removeBlog={removeBlog} initForm={initForm}/>
    ))}
  </ul>
);

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

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      tempBlog: null,
      editMode: false
    }
  }

  fetchData () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(newBlogs => this.setState({
        blogs: newBlogs
      }));
  }

  componentDidMount() {
    this.fetchData();
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

    let form = <Form key="form" tempBlog={tempBlog} updateBlogInput={updateBlogInput} submitForm={submitForm} />;
    let blogList = <BlogList key="blog-list" blogs={blogs} removeBlog={removeBlog} initForm={initForm} />;
    let currentComponent = editMode ? form : blogList;
    
    return (
      <section className="page">
        {currentComponent}
      </section>
    );
  }
}

// Initialize page
ReactDOM.render(<Page />, root);