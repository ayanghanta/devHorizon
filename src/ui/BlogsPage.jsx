import WideBlogCard from "../features/blog/WideBlogCard";
import SquarBlogCard from "../features/blog/SquarBlogCard";
import SmallBlogCard from "../features/blog/SmallBlogCard";

function BlogsPage() {
  return (
    <main>
      <main className="letestBlogContainer">
        <p className="headingSmall">Newest on the Blog</p>
        <WideBlogCard />
      </main>
      <p className="headingSmall">Most Read Blogs</p>
      <div className="squarBlogCardContainer">
        <SquarBlogCard />
        <SquarBlogCard />
        <SquarBlogCard />
        <SquarBlogCard />
      </div>
      <p className="headingSmall mt-mid">More Great Reads!</p>
      <div className="smallBlogCardContainer">
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
      </div>
    </main>
  );
}

export default BlogsPage;
