import React, { Component } from 'react';
import Form from './Form';
import BlogList from './BlogList';

class Page extends Component {
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

    let submitForm = () => {
      updateBlogs(tempBlog);
      closeForm();
    }

    let initForm = (blog) => {
      this.setState({
        tempBlog: blog,
        editMode: true
      });
    }
    
    return (
      <section className="page">
        {
          editMode ?
          <Form key="form" tempBlog={tempBlog} updateBlogInput={updateBlogInput} submitForm={submitForm} />
            :
          <BlogList key="blog-list" blogs={blogs} removeBlog={removeBlog} initForm={initForm} />
        }
      </section>
    );
  }
}

export default Page;
