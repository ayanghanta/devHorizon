import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import WideBlogCard from "../components/WideBlogCard";
import SquarBlogCard from "../components/SquarBlogCard";
import SmallBlogCard from "../components/SmallBlogCard";

function BlogsPage() {
  return (
    <div className="container">
      <PageNav />
      <main>
        <div className="letestBlogContainer">
          <p className="headingSmall">Newest on the Blog</p>
          <WideBlogCard />
        </div>
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
      <Footer />
    </div>
  );
}

export default BlogsPage;
