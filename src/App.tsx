import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
function App() {
  return (
    <div className="flex min-h-screen flex-col w-full dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <HomePage />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;