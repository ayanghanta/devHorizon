import SquarBlogCard from "../features/blog/SquarBlogCard";
import WideBlogCard from "../features/blog/WideBlogCard";

function NewBlogs() {
  return (
    <div>
      <div>
        <p className="headingSmall">Newest on the Blog</p>
        <WideBlogCard />
      </div>
      <div>
        <p className="headingSmall">Most Read Blogs</p>
        <div className="squarBlogCardContainer">
          <SquarBlogCard />
          <SquarBlogCard />
        </div>
      </div>
    </div>
  );
}

export default NewBlogs;
