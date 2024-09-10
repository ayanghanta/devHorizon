import Footer from "../components/Footer";
import MyInfo from "../components/MyInfo";
import PageNav from "../components/PageNav";

function AboutMePage() {
  return (
    <div className="container">
      <PageNav />
      <main>
        <MyInfo />
      </main>
      <Footer />
    </div>
  );
}

export default AboutMePage;
