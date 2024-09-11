import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import BlogsPage from "./pages/BlogsPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutMePage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
