import Hero from "../components/Hero";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import NewBlogs from "../components/NewBlogs";

function HomePage() {
  return (
    <div className="container">
      <PageNav />
      <Hero />
      <main>
        <NewBlogs />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
