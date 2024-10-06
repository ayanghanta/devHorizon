import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
function AppLayout() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />

      <main className="px-3">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
