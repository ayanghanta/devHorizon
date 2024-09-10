import styles from "./NewBlogs.module.css";
import SquarBlogCard from "./SquarBlogCard";
import WideBlogCard from "./WideBlogCard";

function NewBlogs() {
  return (
    <div className={styles.newBlog}>
      <div className={styles.latestBlog}>
        <p className="headingSmall">Newest on the Blog</p>
        <WideBlogCard />
      </div>
      <div className={styles.topBlogs}>
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
