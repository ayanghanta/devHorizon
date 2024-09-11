import Footer from "../components/Footer";
import LoginBox from "../components/LoginBox";
import PageNav from "../components/PageNav";

function LoginPage() {
  return (
    <div className="container">
      <PageNav />
      <main>
        <div className="loginFormContainer">
          <p className="textNotify">This Login Only for Admin</p>
          <LoginBox />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;
