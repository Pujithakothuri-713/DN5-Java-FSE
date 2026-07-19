import { blogs } from "../data";

function BlogDetails() {

  const blogList = (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h1>Blog Details</h1>
      {blogList}
    </div>
  );
}

export default BlogDetails;