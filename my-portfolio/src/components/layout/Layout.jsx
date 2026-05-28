import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      
      {/* The main semantic tag ensures screen readers can identify the primary content area */}
      <main className="main-content">
        {/* React Router injects the current page component here */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;