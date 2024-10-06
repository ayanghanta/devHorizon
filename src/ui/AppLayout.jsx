import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
function AppLayout() {
  return (
    <div className="grid-rows-[1fr auto 1fr] grid min-h-dvh">
      <Header />

      <main className="px-3">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
